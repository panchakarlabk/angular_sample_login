<template>
   <div class="my-form ui main container">
       <div id="secure">
        <h1>Secure Area</h1>
        <p>
            This is a secure area
        </p>
    </div>
    <form class="ui form">
      <div class="fields">
        <div class="four wide field">
          <label>Name</label>
          <input
            type="text"
            name="name"  
             placeholder="Name"    
             required
             v-model="employee.name"       
          />
        </div>
        <div class="six wide field">
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="joe@gmail.com"          
             required
             v-model="employee.email"   
          />
        </div>
         <div class="six wide field">
          <label>Designation</label>
          <input
            type="text"
            name="designation"
            placeholder="Designation"
             v-model="employee.designation"  
          />
        </div>
        <div class="two wide field">
          <!-- <button :class="btnClass" @click="onFormSubmit"> -->
           <button :class="btnClass" @click="CraeteEmp">
           {{btnName}}          
           </button>
        </div>
      </div>
    </form>
      <div class="ui main container">
    <CustomerList
        :customers="customers"
        @onDelete="onDelete"
        @onEdit="onEdit"
      />
  </div>
  </div>

</template>
<script>
import axios from "axios";
import CustomerList from "./CustomerList";
export default {
        name: 'MYForm',
        components: {
        CustomerList
      },
      
data() {
    return {
      url: "http://localhost/apicrudphp/api/read.php",
      customers: [], 
      form: { name: "",  email: "",  designation: "" },
      btnName: "Save",
      btnClass: "ui primary button submit-button",
      employee: {
        name: "",
        email: "",
        designation: "",
      },
      baseURL: "http://localhost/apicrudphp/api/create.php",
      headers: {
      "Content-type": "application/json"
      },
  };
  },
  methods: {
    getCustomers() {       
      axios.get(this.url).then(data => {
        this.customers = data.data;
      });
    },
     onDelete(id) {
       axios
     .post('http://localhost/apicrudphp/api/delete.php?id='+id)
      //  .post('http://localhost/apicrudphp/api/create.php',data,{headers:headers}) 
      .then(() => {
          alert("Customer Delete Sucussfully");
          this.getCustomers();
        })
        .catch(e => {
          alert(e);
        });
    },
     handleChange(event) {
      const { name, value } = event.target;
      let form = this.form;
      form[name] = value;
      this.form = form;
    },
   CraeteEmp(){
     const data ={
      name: this.employee.name,
      email:this.employee.email,
      designation:this.employee.designation
     };
    //  var headers = {
    //  'Access-Control-Allow-Origin': '*',
    //  'Access-Control-Allow-Methods':'post',
    //  'Access-Control-Allow-Headers':'Content-Type',
    //  'Access-Control-Max-Age': '3600',
    //  'Content-Type': 'application/json',
    //   'Authorization':'',
    //  };

     axios
    //  .post(this.baseURL+'?'+'+name='+data.name&'+email='+data.email,this.headers)
      //  .post('http://localhost/apicrudphp/api/create.php',data,{headers:headers}) 
      .post('http://localhost/apicrudphp/api/create.php',data)
      .then(() => {
          alert("Created Sucusss");
          this.getCustomers();
        })
        .catch(e => {
          alert(e);
        });
   },
    onFormSubmit(event) {
      // prevent form submit
      event.preventDefault();

      // form validation
      if (this.formValidation()) {
        // window.console.log("ready to submit");
        
        if (this.form.isEdit) {
  
       axios
        .put('http://localhost/apicrudphp/api/update?='+this.form.isEdit, {
          name: this.form.name,
          email: this.form.email,
          designation: this.form.designation
        })
        .then(() => {
          this.getCustomers();
        })
        .catch(e => {
          alert(e);
        });
      } 
      else {
         axios.post('http://localhost/apicrudphp/api/create.php?name='+this.form.name&'email='+this.form.email&'designation='+this.form.designation)
                 .then(() => {
                     alert("Created Sucusss");
                      this.getCustomers();
                 })
                 .catch((error) => {
                     alert(error);
                 }).finally(() => {
                     //Perform action in always
          });
      }
        

        // change the button to save
        this.btnName = "Save";
        this.btnClass = "ui primary button submit-button";

        // clear form fields
        this.clearFormFields();
      }
    },
    formValidation() {
      // first name
      if (document.getElementsByName("name")[0].value === "") {
        alert("Enter Emplaye name");
        return false;
      }
      // email
      if (document.getElementsByName("email")[0].value === "") {
        alert("Enter email");
        return false;
      }
       // last name
      if (document.getElementsByName("designation")[0].value === "") {
        alert("Enter Designation");
        return false;
      }

      return true;
    },
    clearFormFields() {
      // clear form data
      this.form.name = "";
      this.form.email = "";
       this.form.designation = "";
      this.form.isEdit = false;

      // clear form fields
      document.querySelector(".form").reset();
    }
  },
  created(){
  this.getCustomers();
  }
 };
</script>
<style> 
 #secure {
        background-color: #FFFFFF;
margin-bottom: 20px;
        margin-top: 20px;
    }
</style>
