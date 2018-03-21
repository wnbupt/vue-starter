<template>
  <div class="demo">

    <div class="form-group">
      <label for="inputTask">新建任务</label>
      <input v-model="newItem" v-on:keyup.enter="addNewItem()" class="form-control" id='input-task' style='width:80%'>
    </div>

    <p>待完成</p>

    <transition-group name="flip-list">
      <div v-for="item in items" 
        v-bind:key="item.label" 
        v-on:click="toggleFinish(item)"
        v-on:mouseover="showDelete(item)"       
        v-bind:class="['alert',{'alert-success':item.isFinished,'alert-danger':!item.isFinished}]"
        v-if="!item.isFinished">
        <a href='#' class="alert-link">{{item.label}} </a>
        <button v-if="item.isFinished" class="btn btn-xs btn-success">done</button>
        <button v-else class="btn btn-xs btn-danger">to be done</button>
        <transition name="fade">
          <span class="destroy" @click="removeTodo(item)" v-if="item.label == deleteItem">delete</span>
        </transition>
      </div>

      <p v-bind:key='1'>已完成</p>  

      <div v-for="item in items" 
        v-bind:key="item.label" 
        v-on:click="toggleFinish(item)"
        v-on:mouseover="showDelete(item)"
        v-bind:class="['alert',{'alert-success':item.isFinished,'alert-danger':!item.isFinished}]"
        v-if="item.isFinished">
        <a href='#' class="alert-link">{{item.label}} </a>
        <button v-if="item.isFinished" class="btn btn-xs btn-success">done</button>
        <button v-else class="btn btn-xs btn-danger">to be done</button>
        <transition name="fade">
          <span class="destroy" @click="removeTodo(item)" v-if="item.label == deleteItem">delete</span>
        </transition>
      </div>

    </transition-group>

  </div>
</template>

<script>
import Store from "./../store.js";

export default {
  name: "TodoList",
  data: function() {
    return {
      items: Store.fetch(),
      newItem: "",
      deleteItem: ""
    };
  },
  watch: {
    items: {
      handler: function(items) {
        Store.save(items);
      },
      deep: true
    }
  },
  methods: {
    /* 切换任务完成状态 */
    toggleFinish: function(item) {
      item.isFinished = !item.isFinished;
    },

    /* 添加新任务 */
    addNewItem: function() {
      this.items.push({
        label: this.newItem,
        isFinished: false
      });
      this.newItem = "";
    },

    /* 删除任务 */
    removeTodo: function(item) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].label === item.label) {
          this.items.splice(i, 1);
          break;
        }
      }
    },

    /* 根据鼠标悬停判断delete是否显示 */
    showDelete: function(item) {
      this.deleteItem = item.label;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flip-list-move {
  transition: transform 0.5s;
}
.alert {
  position: relative;
}
.destroy {
  position: absolute;
  right: 20px;
  cursor: pointer;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
