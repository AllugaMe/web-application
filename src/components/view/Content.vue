<template>
  <main class="main-content">
    <v-content>
      <v-container fluid>
        <v-row>
          <v-col xs12 md10 offset-md1>
            <slot></slot>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </main>
</template>

<style lang="stylus">
  .main-content
    min-height: calc(100vh - 45px) // A altura da tela - o tamanho do rodapé.

    .main-header + &                          // Quando ha o cabeçalho o tamanho
      min-height: calc(100vh - (64px + 45px)) // dele influencia na fórmula.
</style>
