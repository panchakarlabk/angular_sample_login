<template>
  <div class="customer-list">
    <div class="data">
      <table class="ui celled table">
        <thead>
          <tr>
            <th style="width: 50px; text-align: center;">#</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Designation</th>
            <th style="width: 148px;">Action</th>
          </tr>
        </thead>

        <tbody>
       <Customer
            v-for="customer in customers"
            :key="customer.id"
             :customer="customer"
            @onDelete="onDelete"
            @onEdit="onEdit"/>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Customer from "./Customer"
import axios from "axios";
export default {
  name: "CustomerList",
  components:{
    Customer
},
  props: {
    customers: {
      type: Array
    }
  },
   methods: {
    onDelete(id) {
       axios
     .post('http://localhost/apicrudphp/api/delete.php?id='+id)
      //  .post('http://localhost/apicrudphp/api/create.php',data,{headers:headers}) 
      .then(() => {
          alert("Customer Delete Sucussfully");  
        })
        .catch(e => {
          alert(e);
        });
    },
    onEdit(data) {
      this.$emit("onEdit", data);
      data.id
      axios
        .put('http://localhost/apicrudphp/api/edite.php?id='+data.id, {
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email
        })
        .then(() => {
          this.getCustomers();
        })
        .catch(e => {
          alert(e);
        });
    }
  }
};
</script>

<style scoped></style>
