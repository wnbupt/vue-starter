<template>
  <div class="container" style="position:relative;">

    <h4>配送地址</h4>
    <div>
      <transition-group name="list">
        <div class="address-wrap" 
        v-for="item in filterData" 
        :key="item.id" 
        :class="{active:isSelected === item.id}"
        @mouseover="isHover = item.id" 
        @click="isSelected = item.id"
        >
          <h5>
            {{item.name}}
            <span v-show="isSelected === item.id" style="color:#f40">
              默认地址
            </span>
          </h5>
          <p>{{item.content}}</p>
          <p>{{item.tel}}</p> 
          <span v-show="item.id === isHover" class="glyphicon glyphicon-pencil edit" aria-hidden="true"></span> 
          <span v-show="item.id === isHover" class="glyphicon glyphicon-trash del" aria-hidden="true" @click="deleteItem(item.id)"></span> 
        </div>
      </transition-group>

      <div class="address-wrap add">
          <span>+</span>
          <p style="font-size:12px;margin-top:-10px;">添加新地址</p>
      </div>
    </div>

    <div class="row more">
      <span @click="isMore = !isMore">more</span>
      <span class="arrow" :class="{dsc : !isMore, asc : isMore}"></span>
    </div>

    <div class="row" style="text-align:center;margin-top:30px;">
      <h4>配送费用</h4>
      <div class="fee-wrap" :class="{active : isFree}" @click="isFree = !isFree">
        <p>
          标准配送
          <span style="color:#f40;font-size:12px;font-weight:bold" v-show="isFree">已选择</span>
        </p>
        <p>free</p>
      </div>
      <div class="fee-wrap" :class="{active : !isFree}" @click="isFree = !isFree">
        <p>
          快速配送
          <span style="color:#f40;font-size:12px;font-weight:bold" v-show="!isFree">已选择</span>          
        </p>
        <p>¥180</p>
      </div>
    </div>

    <div class="row" style="margin-top:30px;text-align:center">
      <button class="btn btn-warning">下一步</button>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddressCard",
  data() {
    return {
      items: [],
      isHover: 0,
      isMore: false,
      isSelected: 0,
      isFree: true
    };
  },
  mounted() {
    this.fetch();
  },

  methods: {
    fetch: function() {
      axios.get("./../../static/address.json").then(res => {
        this.items = res.data;
        res.data.forEach(element => {
          if (element.isDefault) {
            this.isSelected = element.id;
          }
        });
      });
    },
    deleteItem: function(id) {
      this.items.forEach((element, index) => {
        if (element.id === id) {
          this.items.splice(index, 1);
        }
      });
    }
  },

  computed: {
    filterData: function() {
      if (this.items.length <= 3 || this.isMore) {
        return this.items;
      } else {
        return this.items.slice(0, 3);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  text-align: center;
}
.address-wrap {
  width: 24%;
  border: 1px solid #e7e7e7;
  display: inline-block;
  margin-left: 10px;
  margin-top: 10px;
  padding: 20px;
  cursor: pointer;
  transition: all ease 0.5s;
  position: relative;
}
.address-wrap:hover,
.address-wrap.active,
.fee-wrap:hover,
.fee-wrap.active {
  border: 1px solid #f40;
}
.address-wrap p,
.address-wrap span {
  font-size: 12px;
}
.add {
  position: absolute;
  height: 131px;
  text-align: center;
  width: 23.5%;
}
.add > span {
  font-size: 50px;
}
.more {
  text-align: center;
  margin-top: 20px;
  color: #f40;
  font-size: 16px;
  cursor: pointer;
}
.edit {
  position: absolute;
  right: 20px;
  top: 10px;
  color: #f40;
}
.del {
  position: absolute;
  right: 20px;
  top: 100px;
  color: #f40;
}
.fee-wrap {
  width: 20%;
  border: 1px solid #e7e7e7;
  display: inline-block;
  margin-left: 10px;
  margin-top: 10px;
  padding: 10px;
  cursor: pointer;
  transition: all ease 0.5s;
  position: relative;
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
.add-enter-active,
.add-leave-active {
  transition: all 1s;
}
.add-enter,
.add-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  border: 5px solid transparent;
}

.arrow.asc {
  border-bottom: 5px solid #f40;
}

.arrow.dsc {
  border-top: 5px solid #f40;
}
</style>
