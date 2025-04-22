<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col class="pt-10 pb-0" cols="12" sm="8" md="6">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Страница в разработке</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <div class="text-center py-6">
              <v-icon size="64" color="primary">mdi-hammer-wrench</v-icon>
              <h2 class="my-4">Мы работаем над этой страницей</h2>
              <p>Приносим извинения за временные неудобства. Скоро здесь появится новый функционал.</p>
              <p>Пожалуйста, зайдите позже.</p>
            </div>
          </v-card-text>
          <v-card-actions class="justify-center pb-6">
            <v-btn color="primary" to="/" depressed>На главную</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.fill-height {
  min-height: 100vh;
}
.text-center {
  text-align: center;
}
</style>
