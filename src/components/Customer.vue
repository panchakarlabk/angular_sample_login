<template>
 <tr>
    <td>{{ customer.id }}</td>
    <td> {{customer.name }}</td>
    <td>{{ customer.email }}</td>
    <td>{{ customer.designation}}</td>
                  <td><button class="mini ui blue button"  @click="onEdit">Edite</button>
                  <button class="mini ui red button" @click="onDelete">Delete</button></td>
</tr>
</template>
<script>
export default {
  name: "Customer",
  props: {
    customer: {
      type: Object
    }
  },
  methods: {
    onDelete() {
       this.$emit("onDelete", this.customer.id);
    },
    onEdit() {
      // window.console.log("customer edit " + this.customer.id);
      this.$emit("onEdit", this.customer);
    }
  }
};
</script>

<style >
</style>
