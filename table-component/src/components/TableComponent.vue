<template>
  <div id='demo'>

    <div class="search-box">
      <label for="search">search:</label>
      <input type="text" id="search" v-model = "search"/>
    </div>

    <table>
      <thead>
        <th @click="sortBy('name')" :class="sortKey === 'name' ? 'active' : ''">
          Name
          <span class="arrow" :class="sortOrders['name']? 'asc' : 'dsc'"></span>
        </th>
        <th @click="sortBy('power')" :class="sortKey === 'power' ? 'active' : ''" >
          Power
          <span class="arrow" :class="sortOrders['power']? 'asc' : 'dsc'"></span>
        </th>
      </thead>
        
      <tbody>
          <tr v-for="item in filterData" :key="item.name">
            <td>{{item.name}}</td>
            <td>{{item.power}}</td>
          </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: "TableComponent",
  data() {
    return {
      /* 表单数据 */
      content: [
        { name: "Jet Li", power: 8000 },
        { name: "Jackie Chan", power: 7000 },
        { name: "Chuck Norris", power: Infinity },
        { name: "Bruce Lee", power: 9000 }
      ],
      /* 搜索字段 */

      search: "",
      /* 排序顺序 */

      sortOrders: {
        name: true,
        power: true
      },
      /* 当前排序顺序 */

      sortKey: "name"
    };
  },
  computed: {
    /* filterData是随着search和content内容改变的,因此使用计算属性 */
    filterData: function() {
      let temp = [];
      this.content.forEach(value => {
        if (this.search.trim() != "") {
          if (
            value.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
          ) {
            temp.push(value);
          }
        } else {
          temp.push(value);
        }
      });
      return temp;
    }
  },
  methods: {
    /* 根据键值与排序顺序（升序/降序）对表单进行排序 */
    sortBy: function(param) {
      this.sortOrders[param] = !this.sortOrders[param];
      this.sortKey = param;
      let that = this;
      this.content.sort(function(item1, item2) {
        if (that.sortOrders[param]) {
          return item1[param] > item2[param];
        } else {
          return item1[param] < item2[param];
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#demo {
  width: 330px;
  margin: 0 auto;
}
.search-box {
  margin: 10px 0;
}
input {
  height: 30px;
  width: 80%;
  border-radius: 5%;
  border: 1px solid #42b983;
}
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
