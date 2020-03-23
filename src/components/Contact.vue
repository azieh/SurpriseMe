<template>
  <v-sheet id="contact" color="#333333" dark tag="section" tile>
    <div class="py-12"></div>

    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Napisz do mnie</h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-theme-provider light>
        <v-row>
          <v-col cols="12">
            <v-text-field flat label="Imię*" solo></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field flat label="Email*" solo></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field flat label="Temat*" solo></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-textarea flat label="Treść*" solo></v-textarea>
          </v-col>

          <v-col class="mx-auto" cols="auto">
            <v-btn color="accent" x-large>Wyślij</v-btn>
          </v-col>
        </v-row>
      </v-theme-provider>
    </v-container>

    <div class="py-12"></div>
  </v-sheet>
</template>

<script>
export default {
  name: "Contact"
};
</script>
