<template>
  <h4>inp1</h4>
  <div>
    <input type="text" v-bind:value="value_v_bind_0" />
  </div>
  <h4>inp1</h4>
  <div>
    <input type="text" :title="value_v_bind_1" />
  </div>
  <h4>inp1</h4>
  <div>
    <input type="text" v-model="value_v_model" />
  </div>
  <h4>TestModel_1.vue</h4>
  <div>
    text before model 1
    <test_model_1 v-model:value_tm_1="value_from_tm_1_1"></test_model_1>
    <!-- text before slot
    <slot> </slot>
    text after slot -->
    <!-- <test_model_1></test_model_1> -->
    text after model 1
  </div>
</template>
<script>
import test_model_1 from "@/components/TestModel_1.vue";
export default {
  components: {
    test_model_1,
  },
  name: "test_model_0",
  data() {
    return {
      value_v_bind_0: "значение_бинд_0",
      value_v_bind_1: "значение_бинд_1",
      value_v_model: "значение_модель",
      value_from_tm_1_1: "",
      pers_0: new Person("Pavel", "Yakomazov"),
      class: Person,
      
    };
  },
  methods: {},
};

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
</script>
<style></style>
