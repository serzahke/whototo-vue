<template>
  <p>Hello form buildder</p>

  <form action="">
    <div v-bind:class="inputData.[0].class.[0]"
         v-for="input in inputData" :key="input">


      <div class="row">
        <div class="form-group w-75">
          <label for="inputData.[0].id">
            {{ inputData.[0].label }}
          </label>
          <input v-bind:id="inputData.[0].id"
                 v-bind:type="inputType.selected"
                 v-bind:placeholder="inputData.[0].placeholder"
                 v-bind:required="inputData.[0].required"
                 v-on:click="removePlaceHolder"
                 v-on:mouseout="fillHint"
                 v-bind:class="inputData.[0].class.[1]">
        </div>

        <div class="form-group w-25">
          <label for="typeOfInput">Type of input</label>
          <select class="form-control" id="typeOfInput" v-model="inputType.selected">
            <option v-for="option in inputType.options" :key="option"> {{ option.text }}</option>
          </select>
        </div>

      </div>
    </div>
  </form>

  <!--  when user clicked on ADD INPUT , system make a default input-->
  <form action="">
    <button v-on:click="addNewInput"
            v-bind:class="inputData.[0].class.[2]">
      Add Input
    </button>
  </form>
</template>

<script>
export default {
  name: "FormBuilder",
  data() {
    return {

      inputType: {
        selected: 'text',
        options: [
          {text: 'text', value: 'text'},
          {text: 'checkbox', value: 'checkbox'},
          {text: 'color', value: 'color'},
          {text: 'radio', value: 'radio'},
          {text: 'text-area', value: 'text-area'}
        ]
      },

      formData: [
        {
          id: 0,
          name: "new form",
          fieldsNum: 3
        }
      ],

      inputData: [
        {
          id: 0,
          label: "instagram story transition",
          placeholder: "choose name",
          newValue: "",
          fields: 3,
          required: true,
          maxChar: 60,
          type: "text",
          class: ["form-group", "form-control", "btn btn-primary"]
        },
        {
          id: 1,
          label: "instagram story transition",
          placeholder: "choose name",
          newValue: "",
          fields: 3,
          required: true,
          maxChar: 60,
          type: "text",
          class: ["form-group", "form-control", "btn btn-primary"]
        }
      ]

    }
  },
  methods: {
    removePlaceHolder() {
      this.inputData.[0].placeholder = "";
    },
    fillHint() {
      this.inputData.[0].placeholder = "choose name";
    },
    addNewInput() {
      this.inputData.unshift({
        id: this.id + 1,
        label: "instagram story transition",
        placeholder: "choose name",
        newValue: "",
        fields: 3,
        required: true,
        maxChar: 60,
        type: "text",
        class: ["form-group", "form-control", "btn btn-primary"]
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>