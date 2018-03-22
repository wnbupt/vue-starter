<template>
  <div class="container">

    <div class="row shopping-title">
      <span class="col-md-2" style="text-align:left">
        <input type="checkbox" @click="toggleCheck()" v-model="isCheckedAll"/>
        全选
      </span>
      <span class="col-md-6">商品信息</span>
      <span class="col-md-1">单价</span>
      <span class="col-md-1">数量</span>
      <span class="col-md-1">金额</span>
      <span class="col-md-1">操作</span>
    </div>

    <div class="container" style="margin-bottom:60px;">
      <transition-group name="list">
        <div class="row shopping-content" v-for="item in items" :key="item.id">
          <span class="col-md-1">
            <input type="checkbox" :value="item.id" v-model="checkItems"/>
          </span>
          <img class="col-md-2 item-pic" :src="'../../static/image/' + item.img"/>
          <span class="col-md-5 item-title">{{item.name}}</span>
          <span class="col-md-1">{{item.price | getMoney}}</span>
          <span class="col-md-1">
              <span class="operation" @click="changeItemNum(item.id,1)">+</span>
              <input type="text" class="shopping-num" v-model="item.num"/>
              <span class="operation" @click="changeItemNum(item.id,-1)">-</span>
          </span>
          <span class="col-md-1">{{item.num * item.price | getMoney}}</span>
          <span class="col-md-1">
            <button class="btn btn-danger btn-xs" @click="deleteItem(item.id)">删除</button>
          </span>
        </div>
      </transition-group>
    </div>

    <div class="row shopping-all">
      <span class="col-md-2 col-md-offset-6">
        <span>已选商品</span>
        <span style="color:#f40;font-weight:700">{{totalNum}}</span>
        <span>件</span>
      </span>
      <span class="col-md-2">
        <span>共计</span>
        <span style="color:#f40;font-weight:700">{{totalPrice| getMoney}}</span>
        <span>元</span>    
      </span> 
      <button class="col-md-1 col-md-offset-1 btn btn-warning" style="display:inline-block">结算</button>      
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ShoppingCar",
  data() {
    return {
      items: [],
      checkItems: [],
      isCheckedAll: false
    };
  },
  mounted() {
    this.fetch();
  },

  methods: {
    fetch: function() {
      axios.get("./../../static/items.json").then(res => {
        this.items = res.data;
      });
    },
    changeItemNum: function(id, num) {
      this.items.forEach(element => {
        if (element.id === id) {
          if (element.num <= 1 && num == -1) {
          } else {
            element.num += num;
          }
        }
      });
    },
    deleteItem: function(id) {
      this.items.forEach((element, index) => {
        if (element.id === id) {
          this.items.splice(index, 1);
        }
      });
    },
    toggleCheck: function() {
      this.isCheckedAll = !this.isCheckedAll;
      this.checkItems = [];
      if (this.isCheckedAll) {
        this.items.forEach(element => {
          this.checkItems.push(element.id);
        });
      }
    }
  },

  computed: {
    totalNum: function() {
      let temp = 0;
      this.items.forEach(element => {
        if (this.checkItems.indexOf(element.id) > -1) temp += element.num;
      });
      return temp;
    },
    totalPrice: function() {
      let temp = 0;
      this.items.forEach(element => {
        if (this.checkItems.indexOf(element.id) > -1)
          temp += element.num * element.price;
      });
      return temp;
    }
  },

  filters: {
    getMoney: function(value) {
      return "¥" + value.toFixed(2);
    }
  },

  watch: {
    checkItems: function() {
      if (this.checkItems.length === this.items.length) {
        this.isCheckedAll = true;
      } else {
        this.isCheckedAll = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shopping-title,
.shopping-all {
  margin: 10px 0;
  background-color: #e7e7e7;
  padding: 10px;
}
.shopping-all {
  position: fixed;
  bottom: 0;
  margin: 0;
  width: 1140px;
}
.shopping-all span {
  line-height: 35px;
}
.shopping-content {
  line-height: 150px;
}
.item-pic {
  width: 180px;
}
.col-md-1 .shopping-num {
  width: 30px;
  height: 20px;
  display: inline-block;
  margin-right: -3px;
  text-align: center;
}
.operation {
  background-color: #e7e7e7;
  padding: 0 5px;
  margin-right: -4px;
  cursor: pointer;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
