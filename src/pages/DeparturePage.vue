<script setup>
import { onMounted, onUnmounted, reactive, ref, computed } from "vue";
import axios from "axios";
import { sendMessageTG, TOPICS_ID, CHATS_ID, token } from "../services/botService";

const totalFileSize = computed(() => {
  const mediaSize = previews.value.reduce((acc, file) => acc + (file.file?.size || 0), 0);
  const docsSize = documents.value.reduce((acc, file) => acc + (file?.size || 0), 0);
  return (mediaSize + docsSize) / (1024 * 1024);
});
const isSizeExceeded = computed(() => totalFileSize.value > 50);
const snackbar = reactive({
  value: false,
  text: "",
  color: "blue-grey",
});

const message = reactive({
  city: [],
  date: null,
  num: "",
  phone: "",
  object: "",
  fio: "",
  model: "",
  coordinate: "",
  kadastr: "",
  address: "",
  coordinate2: "",
  card_1: [],
  card_1_note: "",
  card_2: [],
  card_2_note: "",
  card_2_dop: [],
  card_2_dop_note: "",
  card_3: [],
  card_3_phone: "",
  card_3_note: "",
  card_4: [],
  card_4_note: "",
  card_4_width: "",
  card_4_width_in: "",
  card_4_width_vorot: "",
  card_5: [],
  card_5_note: "",
  card_5_tree: "",
  card_5_tree_big: "",
  card_6: [],
  card_6_an_vody: [],
  card_6_debet: "",
  card_6_kolodec: [],
  card_6_kolodec_kolca: "",
  card_6_note: "",
  card_6_plan_istoch: [],
  card_6_skvazhina: [],
  card_6_vodoprovod: [],
  card_7: [],
  card_7_dop: [],
  card_7_kvt: "",
  card_7_note: "",
  card_8: [],
  card_8_dop: [],
  card_8_note: "",
  card_9: [],
  card_9_length: [],
  card_9_note: [],
  card_9_width: [],
  card_10: [],
  card_10_diametr: "",
  card_10_glubina: "",
  card_10_length: "",
  card_10_note: "",
  card_10_width: "",
  card_11: [],
  card_11_length: [],
  card_11_note: [],
  card_11_width: [],
  card_12: [],
  card_12_vinos: "",
  card_12_note: "",
  card_13: [],
  card_13_note: "",
});

import { PDFDocument, rgb } from "pdf-lib";

async function sendMessage() {
  if (!message.fio) {
    sendingStatus.error = "Заполните обязательное поля (ФИО)";
    return;
  }
  sendingStatus.isSending = true;
  sendingStatus.error = null;
  sendingStatus.isSuccess = false;

  try {
    if (isSizeExceeded.value) {
      snackbar.value = true;
      snackbar.text = "Превышен максимальный размер файлов (50 МБ)";
      snackbar.color = "error";
      return;
    }

    // Разделяем медиа на фото (для PDF) и видео (для отдельной отправки)
    const photos = previews.value.filter((preview) => preview.type.startsWith("image/"));
    const videos = previews.value.filter((preview) => preview.type.startsWith("video/"));

    // 1. Создаем PDF с фото (если есть)
    let pdfFile = null;
    if (photos.length > 0) {
      const pdfDoc = await PDFDocument.create();

      // Добавляем каждое фото в PDF (с обработкой EXIF)
      for (const [index, preview] of photos.entries()) {
        try {
          // Обрабатываем изображение (удаляем EXIF)
          const processedImage = await processCameraImage(preview.file);
          const imageBytes = await processedImage.arrayBuffer();

          let image;
          if (preview.type === "image/jpeg" || preview.type === "image/jpg") {
            image = await pdfDoc.embedJpg(imageBytes);
          } else if (preview.type === "image/png") {
            image = await pdfDoc.embedPng(imageBytes);
          } else {
            console.warn(`Неподдерживаемый формат изображения: ${preview.type}`);
            continue;
          }

          // Добавляем страницу с изображением
          const page = pdfDoc.addPage([image.width, image.height]);
          page.drawImage(image, {
            x: 0,
            y: 0,
            width: image.width,
            height: image.height,
          });

          // Добавляем подпись (опционально)
          if (message.object || message.fio) {
            page.drawText(`Фото ${index + 1} | ${message.object || ""} | ${message.fio || ""}`, {
              x: 10,
              y: 20,
              size: 12,
              color: rgb(0, 0, 0),
            });
          }
        } catch (error) {
          console.error(`Ошибка обработки фото ${index}:`, error);
        }
      }

      // Сохраняем PDF
      const pdfBytes = await pdfDoc.save();
      pdfFile = new File([pdfBytes], `Фотоматериалы.pdf`, {
        type: "application/pdf",
      });
    }

    // 2. Отправляем текстовое сообщение
    if (message.fio != "") {
      const textResponse = await sendMessageTG(formattedText.value);
      if (!textResponse || !textResponse.ok) {
        throw new Error("Ошибка отправки текстового сообщения");
      }
    }

    // 3. Отправляем PDF с фото (если есть)
    if (pdfFile) {
      const formData = new FormData();
      formData.append("document", pdfFile);
      formData.append("chat_id", CHATS_ID.BASE);
      formData.append("message_thread_id", TOPICS_ID.DEPARTURE);

      await axios.post(`https://api.telegram.org/bot${token}/sendDocument`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      });
    }

    // 4. Отправляем видео (если есть) с обработкой метаданных
    if (videos.length > 0) {
      for (const [index, video] of videos.entries()) {
        try {
          // Обрабатываем видео (удаляем метаданные)
          const processedVideo = await processVideoFile(video.file);

          const formData = new FormData();
          formData.append("video", processedVideo);
          formData.append("chat_id", CHATS_ID.BASE);
          formData.append("message_thread_id", TOPICS_ID.DEPARTURE);
          formData.append("supports_streaming", "true");

          // Добавляем описание для видео
          if (message.object || message.fio) {
            formData.append("caption", `Видео ${index + 1} | ${message.object || ""} | ${message.fio || ""}`);
          }

          await axios.post(`https://api.telegram.org/bot${token}/sendVideo`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
          });
        } catch (error) {
          console.error(`Ошибка отправки видео ${index}:`, error);
        }
      }
    }

    // 5. Отправляем документы (если есть)
    if (documents.value.length > 0) {
      for (const doc of documents.value) {
        const formData = new FormData();
        formData.append("document", doc);
        formData.append("chat_id", CHATS_ID.BASE);
        formData.append("message_thread_id", TOPICS_ID.DEPARTURE);

        await axios.post(`https://api.telegram.org/bot${token}/sendDocument`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
    }

    sendingStatus.isSuccess = true;
    successDialog.value = true;
  } catch (error) {
    console.error("Ошибка отправки:", error);
    sendingStatus.error = "Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.";
    snackbar.value = true;
    snackbar.text = sendingStatus.error;
    snackbar.color = "error";
  } finally {
    sendingStatus.isSending = false;
  }
}

const successDialog = reactive({
  value: false,
});

const sendingStatus = reactive({
  isSending: false,
  isSuccess: false,
  error: null,
});

const formattedText = computed(() => {
  const text = [
    `
👨🏻 ${message.city != "Карточка клиента" ? `Клиент (${message.city})` : ""}
${
  selectedDateTime.value != "" ||
  message.object != "" ||
  message.fio != "" ||
  message.model != "" ||
  message.coordinate != "" ||
  message.kadastr != "" ||
  message.address != "" ||
  message.coordinate2 != ""
    ? `[line]`
    : ""
}
${selectedDateTime.value != "" ? `Дата выезда: ${selectedDateTime.value}` : ""}
${message.num != "" ? `Номер клиента: ${message.num}` : ""}
${message.phone != "" ? `Номер телефона: ${message.phone}` : ""}
${message.object != "" ? `Объект: ${message.object}` : ""}
${message.fio != "" ? `ФИО: ${message.fio}` : ""}
${message.model != "" ? `Модель дома: ${message.model}` : ""}
${message.coordinate != "" ? `Координаты: ${message.coordinate}` : ""}
${message.kadastr != "" ? `Кадастровый номер: ${message.kadastr}` : ""}
${message.address != "" ? `Адрес объекта: ${message.address}` : ""}
${message.coordinate2 != "" ? `Площадка для разрузки модулей: ${message.coordinate2}` : ""}
${message.card_1.length > 0 || message.card_1_note != "" ? `[line]` : ""}
${message.card_1.length > 0 || message.card_1_note != "" ? `⭐️⭐️⭐️ Первичные данные по участку\n` : ""}
${message.card_1 ? `${message.card_1.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_1_note != "" ? `Примечания: ${message.card_1_note}` : ""}
${message.card_2.length > 0 || message.card_2_note != "" ? `[line]` : ""}
${message.card_2.length > 0 || message.card_2_note != "" ? `⭐️⭐️⭐️ Отчет по пробному бурению\n` : ""}
${message.card_2 ? `${message.card_2.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_2_note != "" ? `Примечания: ${message.card_2_note}` : ""}
${message.card_2_dop.length > 0 || message.card_2_dop_note != "" ? `Дополнительные работы:\n` : ""}
${message.card_2_dop.length > 0 ? `${message.card_2_dop.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_2_dop_note != "" ? `Примечания: ${message.card_2_dop_note}` : ""}
${message.card_3.length > 0 || message.card_3_note != "" || message.card_3_phone != "" ? `[line]` : ""}
${message.card_3.length > 0 || message.card_3_note != "" || message.card_3_phone != "" ? `⭐️⭐️⭐️ КПП\n` : ""}
${message.card_3 ? `${message.card_3.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_3_phone != "" ? `Телефон КПП: ${message.card_3_phone}` : ""}
${message.card_3_note != "" ? `Примечания: ${message.card_3_note}` : ""}
${
  message.card_4.length > 0 ||
  message.card_4_note != "" ||
  message.card_4_width != "" ||
  message.card_4_width_in != "" ||
  message.card_4_width_vorot != ""
    ? `[line]`
    : ""
}
${
  message.card_4.length > 0 ||
  message.card_4_note != "" ||
  message.card_4_width != "" ||
  message.card_4_width_in != "" ||
  message.card_4_width_vorot != ""
    ? `⭐️⭐️⭐️ Заезд на участок\n`
    : ""
}
${message.card_4.length > 0 ? `${message.card_4.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_4_width != "" ? `Ширина дороги: ${message.card_4_width} м\.` : ""}
${message.card_4_width_in != "" ? `Ширина заезда: ${message.card_4_width_in} м\.` : ""}
${message.card_4_width_vorot != "" ? `Ширина ворот: ${message.card_4_width_vorot} м\.` : ""}
${message.card_4_note != "" ? `Примечания: ${message.card_4_note}` : ""}
${message.card_5.length > 0 || message.card_5_note != "" || message.card_5_tree != "" || message.card_5_tree_big != "" ? `[line]` : ""}
${
  message.card_5.length > 0 || message.card_5_note != "" || message.card_5_tree != "" || message.card_5_tree_big != ""
    ? `⭐️⭐️⭐️ Расчистка участка, планировка\n`
    : ""
}
${message.card_5.length > 0 ? `${message.card_5.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_5_tree != "" ? `Большие деревья 10-20: ${message.card_5_tree}` : ""}
${message.card_5_tree_big != "" ? `Большие деревья 25-40: ${message.card_5_tree_big}` : ""}
${message.card_5_note != "" ? `Примечания: ${message.card_5_note}` : ""}
${
  message.card_6.length > 0 ||
  message.card_6_note != "" ||
  message.card_6_plan_istoch.length > 0 ||
  message.card_6_vodoprovod.length > 0 ||
  message.card_6_skvazhina.length > 0 ||
  message.card_6_kolodec.length > 0 ||
  message.card_6_kolodec_kolca != "" ||
  message.card_6_debet != "" ||
  message.card_6_an_vody.length > 0
    ? `[line]`
    : ""
}
${
  message.card_6.length > 0 ||
  message.card_6_note != "" ||
  message.card_6_plan_istoch.length > 0 ||
  message.card_6_vodoprovod.length > 0 ||
  message.card_6_skvazhina.length > 0 ||
  message.card_6_kolodec.length > 0 ||
  message.card_6_kolodec_kolca != "" ||
  message.card_6_debet != "" ||
  message.card_6_an_vody.length > 0
    ? `⭐️⭐️⭐️ Источник воды\n`
    : ""
}
${message.card_6.length > 0 ? `${message.card_6.map((task) => `➕ ${task}`).join("\n")}` : ""}
${
  message.card_6_note != "" ||
  message.card_6_plan_istoch.length > 0 ||
  message.card_6_vodoprovod.length > 0 ||
  message.card_6_skvazhina.length > 0 ||
  message.card_6_kolodec.length > 0 ||
  message.card_6_kolodec_kolca != "" ||
  message.card_6_debet != "" ||
  message.card_6_an_vody.length > 0
    ? `Дополнительные работы\n`
    : ""
}
${message.card_6_plan_istoch.length > 0 ? `⭐️ Планируемый источник и допы\n` : ""}
${message.card_6_plan_istoch.length > 0 ? `${message.card_6_plan_istoch.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_6_vodoprovod.length > 0 ? `⭐️ Центральный водопровод\n` : ""}
${message.card_6_vodoprovod.length > 0 ? `${message.card_6_vodoprovod.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_6_skvazhina.length > 0 ? `⭐️ Скважина\n` : ""}
${message.card_6_skvazhina.length > 0 ? `${message.card_6_skvazhina.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_6_kolodec.length > 0 ? `⭐️ Колодец\n` : ""}
${message.card_6_kolodec.length > 0 ? `${message.card_6_kolodec.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_6_kolodec_kolca != "" ? `Кол-во колец: ${message.card_6_kolodec_kolca}` : ""}
${message.card_6_debet != "" ? `Дебет: ${message.card_6_debet}` : ""}
${message.card_6_an_vody.length > 0 ? `⭐️ Анализ воды\n` : ""}
${message.card_6_an_vody.length > 0 ? `${message.card_6_an_vody.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_6_note != "" ? `Примечания: ${message.card_6_note}` : ""}
${message.card_7.length > 0 || message.card_7_note != "" || message.card_7_kvt != "" || message.card_7_dop.length > 0 ? `[line]` : ""}
${
  message.card_7.length > 0 || message.card_7_note != "" || message.card_7_kvt != "" || message.card_7_dop.length > 0
    ? `⚡️⚡️⚡️ Электричество\n`
    : ""
}
${message.card_7.length > 0 ? `${message.card_7.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_7_kvt != "" ? `Количество КВТ: ${message.card_7_kvt}` : ""}
${message.card_7_dop.length > 0 ? `⭐️ Планируемый источник и допы\n` : ""}
${message.card_7_dop.length > 0 ? `${message.card_7_dop.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_7_note != "" ? `Иное: ${message.card_7_note}` : ""}
${message.card_8.length > 0 || message.card_8_note != "" || message.card_8_dop.length > 0 ? `[line]` : ""}
${message.card_8.length > 0 || message.card_8_note != "" || message.card_8_dop.length > 0 ? `🧻🧻🧻 Канализация\n` : ""}
${message.card_8.length > 0 ? `${message.card_8.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_8_dop.length > 0 ? `⭐️ Планируемая канализация и допы\n` : ""}
${message.card_8_dop.length > 0 ? `${message.card_8_dop.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_8_note != "" ? `Иное: ${message.card_8_note}` : ""}
${message.card_9.length > 0 || message.card_9_note != "" || message.card_9_length != "" || message.card_9_width != "" ? `[line]` : ""}
${
  message.card_9.length > 0 || message.card_9_note != "" || message.card_9_length != "" || message.card_9_width != ""
    ? `🅿️🅿️🅿️ Черновая парковка\n`
    : ""
}
${message.card_9_width != "" ? `Ширина: ${message.card_9_width} м.` : ""}
${message.card_9_length != "" ? `Длина: ${message.card_9_length} м.` : ""}
${message.card_9.length > 0 ? `${message.card_9.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_9_note != "" ? `Примечание: ${message.card_9_note}` : ""}
${
  message.card_10.length > 0 ||
  message.card_10_note != "" ||
  message.card_10_length != "" ||
  message.card_10_width != "" ||
  message.card_10_glubina != "" ||
  message.card_10_diametr != ""
    ? `[line]`
    : ""
}
${
  message.card_10.length > 0 ||
  message.card_10_note != "" ||
  message.card_10_length != "" ||
  message.card_10_width != "" ||
  message.card_10_glubina != "" ||
  message.card_10_diametr != ""
    ? `⭐️⭐️⭐️ Заезд на участок\n`
    : ""
}
${message.card_10_width != "" ? `Ширина: ${message.card_10_width} м.` : ""}
${message.card_10_length != "" ? `Длина: ${message.card_10_length} м.` : ""}
${message.card_10_glubina != "" ? `Глубина кювета: ${message.card_10_glubina}` : ""}
${message.card_10_diametr != "" ? `Диаметр трубы по регламенту: ${message.card_10_diametr}` : ""}
${message.card_10.length > 0 ? `${message.card_10.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_10_note != "" ? `Примечание: ${message.card_10_note}` : ""}
${message.card_11.length > 0 || message.card_11_note != "" || message.card_11_length != "" || message.card_11_width != "" ? `[line]` : ""}
${
  message.card_11.length > 0 || message.card_11_note != "" || message.card_11_length != "" || message.card_11_width != ""
    ? `⭐️⭐️⭐️ Дорожки\n`
    : ""
}
${message.card_11_width != "" ? `Ширина: ${message.card_11_width} м.` : ""}
${message.card_11_length != "" ? `Длина: ${message.card_11_length} м.` : ""}
${message.card_11.length > 0 ? `${message.card_11.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_11_note != "" ? `Примечание: ${message.card_11_note}` : ""}
${message.card_12.length > 0 || message.card_12_note != "" || message.card_12_vinos != "" ? `[line]` : ""}
${message.card_12.length > 0 || message.card_12_note != "" || message.card_12_vinos != "" ? `⭐️⭐️⭐️ Отсыпка свайного поля\n` : ""}
${message.card_12.length > 0 ? `${message.card_12.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_12_vinos != "" ? `Вынос по периметру: ${message.card_12_vinos}` : ""}
${message.card_12_note != "" ? `Примечание: ${message.card_12_note}` : ""}
${message.card_13.length > 0 || message.card_13_note != "" ? `[line]` : ""}
${message.card_13.length > 0 || message.card_13_note != "" ? `⭐️⭐️⭐️ Прочие планируемые работы\n` : ""}
${message.card_13.length > 0 ? `${message.card_13.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_13_note != "" ? `Примечание: ${message.card_13_note}` : ""}
`,
  ]
    .filter(Boolean)
    .join("\n");

  return {
    file_name: message.city != "" ? (message.city == "Санкт-Петербург" ? "СПБ" : "МСК") + " " + message.fio : message.fio,
    chat_id: CHATS_ID.BASE,
    topic_id: TOPICS_ID.DEPARTURE,
    text,
  };
});
import exifr from "exifr";

async function processCameraImage(file) {
  try {
    // Удаляем EXIF данные
    const imgData = await exifr.parse(file);
    const img = await createImageBitmap(file);

    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          resolve(
            new File([blob], file.name, {
              type: "image/jpeg",
              lastModified: Date.now(),
            })
          );
        },
        "image/jpeg",
        0.95
      );
    });
  } catch (error) {
    console.error("Ошибка обработки изображения:", error);
    return file; // Возвращаем оригинал при ошибке
  }
}

import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

const ffmpeg = new FFmpeg({ log: true });

async function getRotationFromMetadata(inputName) {
  const metadataFile = "metadata.txt";

  try {
    // Получаем метаданные в файл
    await ffmpeg.exec(["-i", inputName, "-f", "ffmetadata", metadataFile]);
  } catch {
    // Ошибка ожидаема, игнорируем
  }

  try {
    const metadataData = await ffmpeg.readFile(metadataFile);
    const metadataText = new TextDecoder().decode(metadataData);

    if (ffmpeg.FS) {
      ffmpeg.FS("unlink", metadataFile);
    }

    // Ищем метаданные поворота
    const rotationMatch = metadataText.match(/rotate\s*:\s*(\d+)/i) || metadataText.match(/rotation\s*:\s*(\d+)/i);

    if (rotationMatch) {
      return parseInt(rotationMatch[1], 10);
    }
  } catch (error) {
    console.log("Error reading metadata:", error);
  }

  return 0;
}

async function processVideoFile(file) {
  try {
    if (!ffmpeg.loaded) {
      await ffmpeg.load();
    }

    const extMatch = file.name.match(/\.[^\.]+$/);
    const inputName = "input" + (extMatch ? extMatch[0] : ".mp4");
    const outputName = "output.mp4";

    console.log("Writing input file to FS:", inputName);
    await ffmpeg.writeFile(inputName, await fetchFile(file));

    // Получаем метаданные для определения ориентации
    const rotation = await getRotationFromMetadata(inputName);
    console.log("Video rotation detected:", rotation);

    // Основные аргументы FFmpeg
    const args = ["-i", inputName];

    // Определяем фильтры для коррекции ориентации и сохранения пропорций
    let vfFilters = [];

    // Коррекция ориентации
    if (rotation === 90) {
      vfFilters.push("transpose=1");
    } else if (rotation === 180) {
      vfFilters.push("transpose=2,transpose=2");
    } else if (rotation === 270) {
      vfFilters.push("transpose=2");
    }

    // Добавляем фильтр для масштабирования с сохранением пропорций и паддингом для квадратного формата
    // Здесь видео масштабируется так, чтобы оно поместилось в квадрат 480x480 (можно изменить размер),
    // сохраняя пропорции, и добавляются чёрные поля по необходимости.
    vfFilters.push(
      "scale='if(gt(iw,ih),480,-2)':'if(gt(ih,iw),480,-2)'," + // масштабируем по большей стороне до 480, другая сторона - пропорционально
        "pad=480:480:(480-iw)/2:(480-ih)/2" // добавляем паддинг, чтобы получить квадрат 480x480
    );

    // Добавляем фильтры, если они есть
    if (vfFilters.length > 0) {
      args.push("-vf", vfFilters.join(","));
    }

    // Параметры кодирования
    args.push(
      "-c:v",
      "libx264",
      "-preset",
      "fast",
      "-crf",
      "23",
      "-c:a",
      "copy",
      "-movflags",
      "+faststart",
      "-metadata:s:v",
      "rotate=0", // Удаляем метаданные поворота
      "-pix_fmt",
      "yuv420p", // Универсальный формат пикселей
      outputName
    );

    console.log("Running ffmpeg with args:", args.join(" "));
    await ffmpeg.exec(args);

    console.log("Reading output file:", outputName);
    const data = await ffmpeg.readFile(outputName);
    const processedBlob = new Blob([data.buffer], { type: "video/mp4" });

    // Очищаем временные файлы
    if (ffmpeg.FS) {
      console.log("Cleaning up temporary files");
      ffmpeg.FS("unlink", inputName);
      ffmpeg.FS("unlink", outputName);
    }

    console.log("Video processing complete");
    return new File([processedBlob], file.name, {
      type: "video/mp4",
      lastModified: Date.now(),
    });
  } catch (error) {
    console.error("Ошибка обработки видео:", error);
    return file; // Возвращаем оригинальный файл в случае ошибки
  }
}

function isMobileDevice() {
  return window.screen.width < 768 || window.screen.height < 768;
}
// Состояние для отслеживания открытия combobox
const isAnyComboboxOpen = ref(false);
const currentOpenCombobox = ref(null); // Текущий открытый combobox

// Обработчик клика на combobox
const handleComboboxClick = (refName) => {
  if (currentOpenCombobox.value && currentOpenCombobox.value !== refName) {
    const combobox = document.querySelector(`.${currentOpenCombobox.value} .v-menu__content`);
    if (combobox) {
      combobox.style.display = "none";
    }
  }
  currentOpenCombobox.value = refName;
};

// Обработчик открытия/закрытия меню
const handleMenuUpdate = (isOpen, refName) => {
  isAnyComboboxOpen.value = isOpen;
  currentOpenCombobox.value = isOpen ? refName : null;
};

// Закрыть combobox
const closeCombobox = (refName) => {
  const combobox = document.querySelector(`.${refName} .v-menu__content`);
  if (combobox) {
    combobox.style.display = "none"; // Закрываем меню
  }
  isAnyComboboxOpen.value = false;
  currentOpenCombobox.value = null;
};
const moveCursorToFirstHash = () => {
  if (message.phone.length != 18) {
    message.phone = "+7 ";
  }
};

const onBlur = () => {
  if (message.phone.length != 18) {
    message.phone = "";
  }
};

//Фото и видео
const files = ref([]);
const previews = ref([]);
const documents = ref([]);
const documentsInputRef = ref(null);
const fileInputRef = ref(null);

const fileInputKey = ref(0); // Ключ для сброса файлового инпута

const isImage = (type) => type.startsWith("image/");
const isDocument = (file) => {
  const docTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "text/plain",
  ];
  return (
    docTypes.includes(file.type) ||
    file.name.endsWith(".pdf") ||
    file.name.endsWith(".doc") ||
    file.name.endsWith(".docx") ||
    file.name.endsWith(".xls") ||
    file.name.endsWith(".xlsx") ||
    file.name.endsWith(".txt")
  );
};

const onDocumentsChange = (event) => {
  const newDocuments = Array.from(event.target.files || []);

  // Проверка на общий размер
  const totalSize = [...previews.value, ...newDocuments].reduce((acc, file) => acc + file.size, 0) / (1024 * 1024);

  if (totalSize > 50) {
    snackbar.value = true;
    snackbar.text = "Превышен максимальный размер файлов (50 МБ)";
    snackbar.color = "error";
    documents.value = [];
    if (documentsInputRef.value) {
      documentsInputRef.value.inputValue = null;
    }
    return;
  }
};

const removeDocument = (index) => {
  documents.value.splice(index, 1);

  // Полностью сбрасываем файловый инпут
  if (documentsInputRef.value) {
    // Для Vuetify 3.x
    documentsInputRef.value.inputValue = null;
    // Дополнительно сбрасываем внутреннее состояние
    documentsInputRef.value.$el.querySelector('input[type="file"]').value = "";
  }
};
const clearMediaFiles = () => {
  previews.value.forEach((file) => URL.revokeObjectURL(file.url));
  previews.value = [];
  files.value = [];
  fileInputKey.value++; // Сбрасываем ключ инпута
};
const onFileChange = async (event) => {
  const newFiles = Array.from(event.target.files || []);
  if (!newFiles.length) return;

  // Проверка лимита
  if (newFiles.length > 10) {
    snackbar.value = true;
    snackbar.text = "Максимум 10 файлов";
    snackbar.color = "error";
    files.value = [];
    return;
  }

  // Проверка размера
  const totalSize = newFiles.reduce((acc, file) => acc + file.size, 0) / (1024 * 1024);
  if (totalSize > 50) {
    snackbar.value = true;
    snackbar.text = "Превышен максимальный размер (50 МБ)";
    snackbar.color = "error";
    files.value = [];
    return;
  }

  // Очищаем предыдущие превью
  previews.value.forEach((file) => URL.revokeObjectURL(file.url));
  previews.value = [];

  // Обработка новых файлов
  for (const file of newFiles) {
    try {
      const url = URL.createObjectURL(file);
      previews.value.push({
        url,
        type: file.type,
        file: file,
        id: Date.now() + Math.random(),
      });
    } catch (error) {
      console.error("Ошибка обработки файла:", error);
    }
  }

  files.value = newFiles;
};

const removeFile = (index) => {
  URL.revokeObjectURL(previews.value[index].url);
  previews.value.splice(index, 1);

  // Обновляем files для инпута
  files.value = previews.value.map((p) => p.file);

  // Принудительное обновление инпута
  fileInputKey.value++;
};
const dateTime = ref(new Date().toISOString());

const formattedDateTime = computed(() => {
  const date = new Date(dateTime.value);
  return date.toLocaleString("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
});
const selectedDateTime = ref(formattedDateTime.value);
const updateDateTime = (value) => {
  dateTime.value = value;
  selectedDateTime.value = formattedDateTime.value;
};

onMounted(() => {
  if (isMobileDevice()) {
    document.querySelectorAll("input, textarea").forEach((input) => {
      input.addEventListener("focus", () => {
        input.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }
});
</script>
<template>
  <section class="survey survey-container">
    <div class="survey__wrapper">
      <div class="bg-white">
        <div class="mx-auto">
          <div class="section-header">
            <h2 class="header-title">
              <span class="header-text">Первичный выезд</span>
              <span class="header-title-decoration"></span>
            </h2>
          </div>
          <div>
            <div class="mt-3 sm:col-span-3">
              <div class="form-sections">
                <v-card class="form-section">
                  <v-card-title class="section-title">
                    <v-icon color="orange-darken-2" class="mr-2">mdi-account-details</v-icon>
                    Клиент
                  </v-card-title>
                  <v-card-text class="px-4 px-md-8">
                    <v-menu :close-on-content-click="false" :min-width="251.6" :max-width="251.6" location="bottom">
                      <template v-slot:activator="{ props }">
                        <v-text-field
                          variant="outlined"
                          v-model="selectedDateTime"
                          label="Дата выезда"
                          readonly
                          hide-details
                          density="comfortable"
                          class="mb-2"
                          v-bind="props"
                          :disabled="isAnyComboboxOpen"
                        >
                          <template v-slot:prepend-inner>
                            <v-icon color="orange-darken-4"> mdi-clock-outline </v-icon>
                          </template></v-text-field
                        >
                      </template>
                      <v-date-picker
                        v-model="dateTime"
                        mode="date"
                        @update:modelValue="updateDateTime"
                        class="elevated-picker"
                      ></v-date-picker>
                    </v-menu>
                    <v-select
                      v-model="message.city"
                      density="comfortable"
                      hide-details
                      chips
                      class="mb-2"
                      label="Город"
                      :items="['Санкт-Петербург', 'Москва']"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'cityAid'"
                      @click:control="handleComboboxClick('cityAid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'cityAid')"
                      ref="cityidCombobox"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-city </v-icon>
                      </template>
                    </v-select>
                    <v-text-field
                      v-model="message.num"
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      label="Номер клиента"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-account-tag </v-icon>
                      </template>
                    </v-text-field>
                    <v-text-field
                      v-model="message.phone"
                      variant="outlined"
                      class="mb-2"
                      density="comfortable"
                      hide-details
                      v-mask="'+7 (###) ###-##-##'"
                      placeholder="+7 (___) ___-__-__"
                      @focus="moveCursorToFirstHash"
                      @blur="onBlur"
                    >
                      <template v-slot:label> <span class="test"> Номер телефона </span> </template>
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-phone </v-icon>
                      </template>
                    </v-text-field>
                    <v-text-field
                      v-model="message.object"
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      label="Объект"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-home-city </v-icon>
                      </template>
                    </v-text-field>
                    <v-text-field
                      v-model="message.fio"
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      label="ФИО"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-card-account-details </v-icon>
                      </template>
                    </v-text-field>
                    <v-text-field
                      v-model="message.model"
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      label="Модель дома"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-home-floor-3 </v-icon>
                      </template>
                    </v-text-field>
                    <v-text-field
                      v-model="message.coordinate"
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      label="Координаты"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-map-marker-outline </v-icon>
                      </template>
                    </v-text-field>
                    <v-text-field
                      v-model="message.kadastr"
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      label="Кадастровый номер участка"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-map-outline </v-icon>
                      </template>
                    </v-text-field>
                    <v-text-field
                      v-model="message.address"
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      label="Адрес объекта"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-map-marker </v-icon>
                      </template>
                    </v-text-field>
                    <v-text-field
                      v-model="message.coordinate2"
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      label="Площадка для разгрузки модулей координаты"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-truck-delivery-outline </v-icon>
                      </template>
                    </v-text-field>
                  </v-card-text>
                </v-card>

                <label class="block text-h5 mt-5 font-semibold text-gray-900 pl-4">Общие данные</label>

                <v-card class="form-section">
                  <v-card-title class="section-title">
                    <v-icon color="orange-darken-2" class="mr-2">mdi-earth-box</v-icon>
                    Первичные данные по участку
                  </v-card-title>
                  <v-card-text class="px-4 px-md-8">
                    <v-select
                      v-model="message.card_1"
                      :items="['Топография', 'Геодезия', 'Пробное бурение', 'Схема размещения']"
                      selectedItem
                      label="Мероприятия"
                      chips
                      variant="outlined"
                      multiple
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_1Aid'"
                      @click:control="handleComboboxClick('card_1Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_1Aid')"
                      ref="card_1idCombobox"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-clipboard-list-outline </v-icon>
                      </template>
                    </v-select>
                    <v-textarea
                      v-model="message.card_1_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Примечания"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                    </v-textarea>
                  </v-card-text>
                </v-card>

                <v-card class="form-section">
                  <v-card-title class="section-title">
                    <v-icon color="orange-darken-2" class="mr-2">mdi-mine</v-icon>
                    Отчет по пробному бурению
                  </v-card-title>
                  <v-card-text class="px-4 px-md-8">
                    <v-select
                      v-model="message.card_2"
                      :items="['Стандарт', 'Обвязка']"
                      label="Мероприятия"
                      chips
                      variant="outlined"
                      multiple
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_2Aid'"
                      @click:control="handleComboboxClick('card_2Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_2Aid')"
                      ref="card_2idCombobox"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-clipboard-list-outline </v-icon>
                      </template>
                    </v-select>
                    <v-textarea
                      v-model="message.card_2_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Примечания"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                    </v-textarea>
                    <v-card-subtitle class="pl-1 mb-2">Дополнительные работы</v-card-subtitle>
                    <v-select
                      v-model="message.card_2_dop"
                      :items="['Корни/пни', 'Строительный мусор', 'Снять дерн', 'Генератор', 'Камни']"
                      label="Мероприятия"
                      chips
                      variant="outlined"
                      multiple
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_2_dopAid'"
                      @click:control="handleComboboxClick('card_2_dopAid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_2_dopAid')"
                      ref="card_2_dopidCombobox"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-clipboard-list-outline </v-icon>
                      </template>
                    </v-select>
                    <v-textarea
                      v-model="message.card_2_dop_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Примечания"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                    </v-textarea>
                  </v-card-text>
                </v-card>

                <v-card class="form-section">
                  <v-card-title class="section-title">
                    <v-icon color="orange-darken-2" class="mr-2">mdi-shield-car</v-icon>
                    КПП
                  </v-card-title>
                  <v-card-text class="px-4 px-md-8">
                    <v-select
                      v-model="message.card_3"
                      :items="['КПП имеется', 'Пропуск от КПП', 'Пропуск заранее', 'КПП отсутствует']"
                      label="КПП"
                      chips
                      variant="outlined"
                      multiple
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_3Aid'"
                      @click:control="handleComboboxClick('card_3Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_3Aid')"
                      ref="card_3idCombobox"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-gate </v-icon>
                      </template>
                    </v-select>
                    <v-text-field
                      v-model="message.card_3_phone"
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      label="Телефон КПП"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-phone </v-icon>
                      </template>
                    </v-text-field>
                    <v-textarea
                      v-model="message.card_3_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Примечания"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                    </v-textarea>
                  </v-card-text>
                </v-card>
                <v-card class="form-section">
                  <v-card-title class="section-title">
                    <v-icon color="orange-darken-2" class="mr-2">mdi-road-variant</v-icon>
                    Заезд на участок
                  </v-card-title>
                  <v-card-text class="px-4 px-md-8">
                    <v-select
                      v-model="message.card_4"
                      :items="['Заезда нет', 'Обустроен']"
                      label="Заезд"
                      chips
                      variant="outlined"
                      multiple
                      hide-details
                      class="mb-2"
                      density="comfortable"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_4Aid'"
                      @click:control="handleComboboxClick('card_4Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_4Aid')"
                      ref="card_4idCombobox"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-highway </v-icon>
                      </template>
                    </v-select>
                    <v-text-field
                      v-model="message.card_4_width"
                      density="comfortable"
                      hide-details
                      type="number"
                      step="0.01"
                      suffix="м"
                      class="mb-2"
                      label="Ширина дороги"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-arrow-left-right </v-icon>
                      </template>
                    </v-text-field>
                    <v-text-field
                      v-model="message.card_4_width_in"
                      density="comfortable"
                      hide-details
                      type="number"
                      step="0.01"
                      suffix="м"
                      class="mb-2"
                      label="Ширина заезда"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-arrow-split-vertical </v-icon>
                      </template>
                    </v-text-field>
                    <v-text-field
                      v-model="message.card_4_width_vorot"
                      density="comfortable"
                      hide-details
                      type="number"
                      step="0.01"
                      suffix="м"
                      class="mb-2"
                      label="Ширина ворот"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-gate-arrow-right </v-icon>
                      </template>
                    </v-text-field>
                    <v-textarea
                      v-model="message.card_4_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Примечания"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                    </v-textarea>
                  </v-card-text>
                </v-card>
                <v-card class="form-section">
                  <v-card-title class="section-title">
                    <v-icon color="orange-darken-2" class="mr-2">mdi-bulldozer</v-icon>
                    Расчистка участка, планировка
                  </v-card-title>
                  <v-card-text class="px-4 px-md-8">
                    <v-select
                      v-model="message.card_5"
                      :items="[
                        'Кусты',
                        'Планировка',
                        'Снос построек',
                        'Отсыпка участка',
                        'Вывоз грунта',
                        'Дробление пней/веток',
                        'Вывоз строительного мусора',
                      ]"
                      label="Мероприятия"
                      chips
                      variant="outlined"
                      multiple
                      hide-details
                      class="mb-2"
                      density="comfortable"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_5Aid'"
                      @click:control="handleComboboxClick('card_5Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_5Aid')"
                      ref="card_5idCombobox"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-clipboard-list-outline </v-icon>
                      </template>
                    </v-select>
                    <v-text-field
                      v-model="message.card_5_tree"
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      label="Большие деревья 10-20"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-tree-outline </v-icon>
                      </template>
                    </v-text-field>
                    <v-text-field
                      v-model="message.card_5_tree_big"
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      label="Большие деревья 25-40"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-tree-outline </v-icon>
                      </template></v-text-field
                    >
                    <v-textarea
                      v-model="message.card_5_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Примечания"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                    </v-textarea>
                  </v-card-text>
                </v-card>

                <label class="block text-h5 mt-5 font-semibold text-gray-900 pl-4">Коммуникации</label>

                <v-card class="form-section">
                  <v-card-title class="section-title">
                    <v-icon color="orange-darken-2" class="mr-2">mdi-water-pump</v-icon>
                    Источник воды
                  </v-card-title>
                  <v-card-text class="px-4 px-md-8">
                    <v-select
                      v-model="message.card_6"
                      :items="['Нет источника', 'Колодец', 'Центральный водопровод', 'Другой дом (постройка)', 'Скважина']"
                      label="Источник воды"
                      chips
                      variant="outlined"
                      multiple
                      density="comfortable"
                      hide-details
                      class="mb-1"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_6Aid'"
                      @click:control="handleComboboxClick('card_6Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_6Aid')"
                      ref="card_6idCombobox"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-water-check-outline </v-icon>
                      </template>
                    </v-select>
                    <v-card-title class="text-subtitle-1 mb-1 pl-1">Планируемый источник и допы</v-card-title>
                    <v-select
                      v-model="message.card_6_plan_istoch"
                      :items="[
                        'Скважина',
                        'Автоматика',
                        'Подведение магистрали',
                        'Колодец',
                        'Водоочистка',
                        'Перенос точки ввода',
                        'Кессон',
                        'Насос',
                      ]"
                      label="Планируемый источник и допы"
                      chips
                      variant="outlined"
                      multiple
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_6_plan_istochAid'"
                      @click:control="handleComboboxClick('card_6_plan_istochAid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_6_plan_istochAid')"
                      ref="card_6_plan_istochidCombobox"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-pipe-wrench </v-icon>
                      </template>
                    </v-select>
                    <v-select
                      v-model="message.card_6_vodoprovod"
                      :items="['Ковер', 'Врезка']"
                      label="Центральный водопровод"
                      chips
                      variant="outlined"
                      multiple
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_6_vodoprovodAid'"
                      @click:control="handleComboboxClick('card_6_vodoprovodAid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_6_vodoprovodAid')"
                      ref="card_6_vodoprovodidCombobox"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-pipe-valve </v-icon>
                      </template>
                    </v-select>

                    <v-select
                      v-model="message.card_6_skvazhina"
                      :items="['Насос', 'Паспорт']"
                      label="Скважина"
                      chips
                      variant="outlined"
                      multiple
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_6_skvazhinaAid'"
                      @click:control="handleComboboxClick('card_6_skvazhinaAid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_6_skvazhinaAid')"
                      ref="card_6_skvazhinaCombobox"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-pump </v-icon>
                      </template>
                    </v-select>
                    <v-select
                      v-model="message.card_6_kolodec"
                      :items="['Насос']"
                      label="Колодец"
                      chips
                      variant="outlined"
                      multiple
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_6_kolodecAid'"
                      @click:control="handleComboboxClick('card_6_kolodecAid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_6_kolodecAid')"
                      ref="card_6_kolodecCombobox"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-water-pump </v-icon>
                      </template>
                    </v-select>
                    <v-text-field
                      v-model="message.card_6_kolodec_kolca"
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      label="Кол-во колец"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-numeric </v-icon>
                      </template>
                    </v-text-field>
                    <v-text-field
                      v-model="message.card_6_debet"
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      label="Дебет"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-water-percent </v-icon>
                      </template>
                    </v-text-field>

                    <v-select
                      v-model="message.card_6_an_vody"
                      :items="['Имеется', 'Нужен']"
                      label="Анализ воды"
                      chips
                      variant="outlined"
                      multiple
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_6_an_vodyAid'"
                      @click:control="handleComboboxClick('card_6_an_vodyAid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_6_an_vodyAid')"
                      ref="card_6_an_vodyCombobox"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-water-opacity </v-icon>
                      </template>
                    </v-select>
                    <v-textarea
                      v-model="message.card_6_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Примечания"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                    </v-textarea>
                  </v-card-text>
                </v-card>
                <v-card class="form-section">
                  <v-card-title class="section-title">
                    <v-icon color="orange-darken-2" class="mr-2">mdi-flash</v-icon>
                    Электричество
                  </v-card-title>
                  <v-card-text class="px-4 px-md-8">
                    <v-select
                      v-model="message.card_7"
                      :items="['Стандарт', 'Есть', 'Нет']"
                      label="Электричество"
                      chips
                      variant="outlined"
                      multiple
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_7Aid'"
                      @click:control="handleComboboxClick('card_7Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_7Aid')"
                      ref="card_7Combobox"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-power-plug </v-icon>
                      </template>
                    </v-select>
                    <v-text-field
                      v-model="message.card_7_kvt"
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      label="Количество КВТ"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-transmission-tower </v-icon>
                      </template>
                    </v-text-field>
                    <v-card-title class="text-subtitle-1 mb-1 pl-1">Планируемые доп. работы</v-card-title>
                    <v-select
                      v-model="message.card_7_dop"
                      :items="[
                        'Подведение кабеля',
                        'Генератор',
                        'Опора',
                        'Уличное освещение',
                        'Воздушка',
                        'Катушка',
                        'Трубостойка',
                        'Автоматика ворот',
                        'Стабилизатор',
                        'Заземление',
                        'Гильза под интернет',
                      ]"
                      label="Планируемый источник и допы"
                      class="mb-2"
                      chips
                      multiple
                      variant="outlined"
                      density="comfortable"
                      hide-details
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_7_dopAid'"
                      @click:control="handleComboboxClick('card_7_dopAid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_7_dopAid')"
                      ref="card_7_dopCombobox"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-plus </v-icon>
                      </template>
                    </v-select>
                    <v-textarea
                      v-model="message.card_7_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Иное"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                    </v-textarea>
                  </v-card-text>
                </v-card>
                <v-card class="form-section">
                  <v-card-title class="section-title">
                    <v-icon color="orange-darken-2" class="mr-2">mdi-water-sync</v-icon>
                    Канализация
                  </v-card-title>
                  <v-card-text class="px-4 px-md-8">
                    <v-card-title class="text-h6 mb-1 pl-1">Канализация</v-card-title>
                    <v-select
                      v-model="message.card_8"
                      :items="['Нет', 'Центральная', 'ЛОС']"
                      label="Канализация"
                      chips
                      variant="outlined"
                      multiple
                      density="comfortable"
                      hide-details
                      class="mb-1"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_8Aid'"
                      @click:control="handleComboboxClick('card_8Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_8Aid')"
                      ref="card_8Combobox"
                      ><template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-pipe-disconnected </v-icon>
                      </template></v-select
                    >
                    <v-card-title class="text-subtitle-1 mb-1 pl-1">Планируемая канализация</v-card-title>
                    <v-select
                      v-model="message.card_8_dop"
                      :items="['ЛОС', 'Грейющий кабель', 'Отведение', 'Доп. насос', 'Фильтрационный колодец', 'Поле рассеивания']"
                      label="Планируемая канализация и допы"
                      class="mb-2"
                      chips
                      multiple
                      variant="outlined"
                      density="comfortable"
                      hide-details
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_8_dopAid'"
                      @click:control="handleComboboxClick('card_8_dopAid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_8_dopAid')"
                      ref="card_8_dopCombobox"
                      ><template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-filter-outline </v-icon>
                      </template></v-select
                    >
                    <v-textarea
                      v-model="message.card_8_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Иное"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                    </v-textarea>
                  </v-card-text>
                </v-card>
                <label class="block text-h5 mt-5 font-semibold text-gray-900 pl-4">Дополнительные работы</label>
                <v-card class="form-section">
                  <v-card-title class="section-title">
                    <v-icon color="orange-darken-2" class="mr-2">mdi-parking</v-icon>
                    Черновая парковка
                  </v-card-title>
                  <v-card-text class="px-4 px-md-8">
                    <v-text-field
                      v-model="message.card_9_width"
                      density="comfortable"
                      hide-details
                      type="number"
                      step="0.01"
                      suffix="м"
                      class="mb-2"
                      label="Ширина"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-arrow-expand-horizontal </v-icon>
                      </template>
                    </v-text-field>
                    <v-text-field
                      v-model="message.card_9_length"
                      density="comfortable"
                      hide-details
                      type="number"
                      step="0.01"
                      suffix="м"
                      class="mb-2"
                      label="Длина"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-arrow-expand-vertical </v-icon>
                      </template>
                    </v-text-field>
                    <v-select
                      v-model="message.card_9"
                      :items="[
                        'Черновая',
                        'Щебень 20-40',
                        'ЩПС 0-40',
                        'Отсев',
                        'Песок',
                        'Бордюр',
                        'Финишная отсыпка 5-20',
                        'Подготовка под мощение',
                      ]"
                      label="Обустройство парковки"
                      chips
                      variant="outlined"
                      multiple
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_9Aid'"
                      @click:control="handleComboboxClick('card_9Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_9Aid')"
                      ref="card_9Combobox"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-car-brake-parking </v-icon>
                      </template>
                    </v-select>
                    <v-textarea
                      v-model="message.card_9_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Примечание"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                    </v-textarea>
                  </v-card-text>
                </v-card>
                <v-card class="form-section">
                  <v-card-title class="section-title">
                    <v-icon color="orange-darken-2" class="mr-2">mdi-highway</v-icon>
                    Заезд на участок
                  </v-card-title>
                  <v-card-text class="px-4 px-md-8">
                    <v-text-field
                      v-model="message.card_10_width"
                      density="comfortable"
                      hide-details
                      type="number"
                      step="0.01"
                      suffix="м"
                      class="mb-2"
                      label="Ширина"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-arrow-expand-horizontal </v-icon>
                      </template>
                    </v-text-field>
                    <v-text-field
                      v-model="message.card_10_length"
                      density="comfortable"
                      hide-details
                      type="number"
                      step="0.01"
                      suffix="м"
                      class="mb-2"
                      label="Длина"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-arrow-expand-vertical </v-icon>
                      </template>
                    </v-text-field>
                    <v-text-field
                      v-model="message.card_10_glubina"
                      density="comfortable"
                      hide-details
                      type="number"
                      step="0.01"
                      suffix="м"
                      class="mb-2"
                      label="Глубина кювета"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-arrow-down-bold </v-icon>
                      </template>
                    </v-text-field>
                    <v-text-field
                      v-model="message.card_10_diametr"
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      label="Диаметр трубы по регламенту"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-pipe </v-icon>
                      </template>
                    </v-text-field>
                    <v-select
                      v-model="message.card_10"
                      :items="['Бетон', 'SN8', 'Георешетка', 'Финишная отсыпка 5-20', 'Отсев', 'Песок', 'Щебень 20-40', 'ЩПС 0-40']"
                      label="Обустройство заезда"
                      chips
                      variant="outlined"
                      multiple
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_10Aid'"
                      @click:control="handleComboboxClick('card_10Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_10Aid')"
                      ref="card_10Combobox"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-road </v-icon>
                      </template>
                    </v-select>
                    <v-textarea
                      v-model="message.card_10_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Примечание"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                    </v-textarea>
                  </v-card-text>
                </v-card>
                <v-card class="form-section">
                  <v-card-title class="section-title">
                    <v-icon color="orange-darken-2" class="mr-2">mdi-account-details</v-icon>
                    Дорожки
                  </v-card-title>
                  <v-card-text class="px-4 px-md-8">
                    <v-text-field
                      v-model="message.card_11_width"
                      density="comfortable"
                      hide-details
                      type="number"
                      step="0.01"
                      suffix="м"
                      class="mb-2"
                      label="Ширина"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-arrow-expand-horizontal </v-icon>
                      </template>
                    </v-text-field>
                    <v-text-field
                      v-model="message.card_11_length"
                      density="comfortable"
                      hide-details
                      type="number"
                      step="0.01"
                      suffix="м"
                      class="mb-2"
                      label="Длина"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-arrow-expand-vertical </v-icon>
                      </template>
                    </v-text-field>

                    <v-select
                      v-model="message.card_11"
                      :items="['Бетон', 'SN8', 'Георешетка', 'Финишная отсыпка 5-20', 'Отсев', 'Песок', 'Щебень 20-40', 'ЩПС 0-40']"
                      label="Обустройство дорожек"
                      chips
                      variant="outlined"
                      multiple
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_11Aid'"
                      @click:control="handleComboboxClick('card_11Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_11Aid')"
                      ref="card_11Combobox"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4">mdi-puzzle-outline </v-icon>
                      </template>
                    </v-select>
                    <v-textarea
                      v-model="message.card_11_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Примечание"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                    </v-textarea>
                  </v-card-text>
                </v-card>
                <v-card class="form-section">
                  <v-card-title class="section-title">
                    <v-icon color="orange-darken-2" class="mr-2">mdi-dots-grid</v-icon>
                    Отсыпка свайного поля
                  </v-card-title>
                  <v-card-text class="px-4 px-md-8">
                    <v-text-field
                      v-model="message.card_12_vinos"
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      label="Вынос по периметру"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4"> mdi-vector-square </v-icon>
                      </template>
                    </v-text-field>
                    <v-select
                      v-model="message.card_12"
                      :items="['Отсев', 'Финишная отсыпка 5-20', 'Песок']"
                      label="Обустройство"
                      chips
                      variant="outlined"
                      multiple
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_12Aid'"
                      @click:control="handleComboboxClick('card_12Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_12Aid')"
                      ref="card_12Combobox"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4">mdi-dump-truck </v-icon>
                      </template>
                    </v-select>
                    <v-textarea
                      v-model="message.card_12_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Примечание"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                    </v-textarea>
                  </v-card-text>
                </v-card>

                <label class="block text-h5 mt-5 font-semibold text-gray-900 pl-4">Прочие планируемые дополнительные работы</label>

                <v-card class="form-section">
                  <v-card-title class="section-title">
                    <v-icon color="orange-darken-2" class="mr-2">mdi-clipboard-list-outline</v-icon>
                    Планируемые работы
                  </v-card-title>
                  <v-card-text class="px-4 px-md-8">
                    <v-select
                      v-model="message.card_13"
                      :items="['Дренаж', 'Забор', 'Чистова парковка', 'Доп. сваи', 'Озеленение']"
                      label="Планируемые работы"
                      chips
                      variant="outlined"
                      multiple
                      density="comfortable"
                      hide-details
                      class="mb-2"
                      dense
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_13Aid'"
                      @click:control="handleComboboxClick('card_13Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_13Aid')"
                      ref="card_13Combobox"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon color="orange-darken-4">mdi-tools </v-icon>
                      </template>
                    </v-select>
                    <v-textarea
                      v-model="message.card_13_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Иное"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    >
                    </v-textarea>
                  </v-card-text>
                </v-card>
                <label class="block text-h5 mt-5 font-semibold text-gray-900 pl-4">Загрузка файлов</label>

                <v-card class="form-section">
                  <v-card-title class="section-title">
                    <v-icon color="orange-darken-2" class="mr-2">mdi-account-details</v-icon>
                    Материалы
                  </v-card-title>
                  <v-card-text class="px-4 px-md-8">
                    <div>до 10 файлов (в сумме 50 МБ)</div>
                    <div class="mb-4" :class="['text-caption', isSizeExceeded ? 'text-red' : 'text-grey']">
                      Текущий размер: {{ totalFileSize.toFixed(2) }} МБ
                      <span v-if="isSizeExceeded">(превышен лимит!)</span>
                    </div>
                    <div>
                      <v-file-input
                        ref="fileInputRef"
                        v-model="files"
                        multiple
                        variant="outlined"
                        accept="image/*,video/*"
                        label="Добавьте фото и видео"
                        @change="onFileChange"
                        :key="fileInputKey"
                        clearable
                        @click:clear="clearMediaFiles"
                      >
                      </v-file-input>
                      <v-file-input
                        ref="documentsInputRef"
                        v-model="documents"
                        variant="outlined"
                        multiple
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.txt"
                        label="Добавьте документы"
                        @change="onDocumentsChange"
                      ></v-file-input>
                      <v-row v-if="previews.length">
                        <v-col v-for="(preview, index) in previews" :key="preview.id" cols="12" sm="4">
                          <div class="preview-wrapper">
                            <v-img v-if="isImage(preview.type)" :src="preview.url" aspect-ratio="1" class="grey lighten-2"></v-img>
                            <video v-else controls :src="preview.url" class="grey lighten-2" style="width: 100%; height: 200px"></video>
                            <v-btn icon small class="remove-btn" @click="removeFile(index)">
                              <v-icon color="red">mdi-close</v-icon>
                            </v-btn>
                          </div>
                        </v-col>
                      </v-row>
                      <v-list v-if="documents.length > 0" class="mt-4">
                        <v-list-item v-for="(doc, index) in documents" :key="index">
                          <template v-slot:prepend>
                            <v-icon>mdi-file-document</v-icon>
                          </template>
                          <v-list-item-title>{{ doc.name }}</v-list-item-title>
                          <template v-slot:append>
                            <v-btn icon @click="removeDocument(index)">
                              <v-icon color="red">mdi-close</v-icon>
                            </v-btn>
                          </template>
                        </v-list-item>
                      </v-list>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
              <div class="form-actions">
                <v-btn
                  @click="sendMessage"
                  class="submit-btn"
                  variant="outlined"
                  :disabled="sendingStatus.isSending"
                  :loading="sendingStatus.isSending"
                >
                  <template v-slot:loader>
                    <v-progress-circular indeterminate color="white" size="24" width="3"></v-progress-circular>
                    <span class="ml-2">Отправка...</span>
                  </template>
                  Отправить
                </v-btn>
              </div>
            </div>
            <v-dialog v-model="successDialog.value" max-width="400">
              <v-card>
                <v-card-title class="text-h5 bg-success text-white">Данные отправлены</v-card-title>
                <v-card-text class="pa-4">Ваши данные успешно отправлены.</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="success" variant="text" @click="successDialog.value = false">Закрыть</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-snackbar v-model="sendingStatus.error" color="error" timeout="5000" location="bottom right">
              {{ sendingStatus.error }}
              <template v-slot:actions>
                <v-btn variant="text" @click="sendingStatus.error = null">Закрыть</v-btn>
              </template>
            </v-snackbar>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;
.survey-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem 0 1rem;
  font-family: "Roboto", sans-serif;
}

.form-sections {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.form-section {
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  width: 100%;

  &:hover {
    // transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12) !important;
  }

  .section-title {
    background: linear-gradient(to right, #f5f7fa, #ffffff);
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid #f0f0f0;
    font-weight: 600;
    color: #2c3e50;
    font-size: 1.25rem;
    white-space: wrap;
  }

  .v-card-text {
    padding: 1.5rem;
  }
}

.form-actions {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;

  .submit-btn {
    background: linear-gradient(135deg, #ff8c42, #ea5b0c) !important;
    color: white !important;
    padding: 0 2rem !important;
    height: 48px !important;
    font-weight: 500 !important;
    letter-spacing: 0.5px;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(234, 91, 12, 0.3) !important;
    }
  }
}
.section-header {
  margin-bottom: 40px;
  text-align: center;
  @media (max-width: $md4) {
    margin-bottom: 30px;
    line-height: 1.2;
  }
}
.header-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 15px 0;
  position: relative;
  display: inline-block;
  font-family: "Montserrat", sans-serif;

  .header-text {
    background: linear-gradient(90deg, #ea5b0c, #ff8c42);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    position: relative;
    z-index: 2;
    letter-spacing: -0.03em;
    text-transform: uppercase;
  }

  .header-title-decoration {
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 5px;
    // background: linear-gradient(90deg, black, darken(black, 15%));
    background: linear-gradient(90deg, #ea5b0c, #ff8c42);
    border-radius: 3px;
    transition: width 0.3s ease;
  }

  &:hover .header-title-decoration {
    width: 120px;
  }

  @media (max-width: $md3) {
    font-size: 2rem;
  }

  @media (max-width: $md4) {
    font-size: 2rem;
    margin-bottom: 10px;

    .header-title-decoration {
      width: 60px;
      height: 3px;
      bottom: -8px;
    }

    &:hover .header-title-decoration {
      width: 80px;
    }
  }
}

.title-text {
  background: linear-gradient(90deg, #2c3e50, #1a1a1a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
  z-index: 2;
  text-transform: uppercase;
}
.preview-wrapper {
  position: relative;
}

.remove-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  background: white;
}

.form-control {
  width: 100%;
}
.survey__input {
  display: flex;
}
.v-list-item {
  min-width: 25px;
}
.v-checkbox {
  margin: 0;
  padding: 0;
}

.preview-item {
  position: relative;
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
}

.remove-btn {
  position: absolute;
  top: 4px;
  right: 4px;
}

.file-name {
  padding-right: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.elevated-picker {
  position: relative;
  z-index: 2500 !important; /* Стандартный z-index v-dialog - 2400 */
}
</style>
