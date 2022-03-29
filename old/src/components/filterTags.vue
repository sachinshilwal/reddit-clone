<template>
  <div class="filter__tags">
    <div class="tag__items">
      <div
        v-for="tag in tags"
        :key="tag"
        :class="getClass(tag.name)"
        @click="selected = tag.name"
      >
        <i :class="tag.icon"></i>
        <span> {{ tag.name }}</span>
      </div>
    </div>
    <div class="filter__right__tags">
      <i class="fas fa-bars"></i>
      <i class="fas fa-sort-down"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "Top"
    };
  },
  props: ["tags"],
  methods: {
    getClass(val) {
      const classActive = "tag__item  tag__item__active";
      const classInactive = "tag__item";
      var result = val === this.selected ? classActive : classInactive;
      return result;
    }
  },
  watch: {
    selected(val) {
      this.$emit("selected", val);
      // this.$router.replace(`/${val}`);
      console.log(val)
    }
  }
};
</script>

<style>
.filter__tags {
  margin-top: 20px;
  height: 5vh;
  background-color: black;
  display: flex;
  padding: 2vh;
  border: 1px solid #d3d1d1;
  border-radius: 5px;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: hidden;
  color: white;
}

.tag__items {
  display: flex;
  flex: 0.7;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  font-size: 13px;
}

.filter__right__tags {
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.tag__item {
  padding: 8px 10px;
  font-weight: 900;
  opacity: 0.6;
}

.tag__item:hover {
  opacity: 1;
  cursor: pointer;
  border-radius: 20px;
  background: #6b6a6a;
}

.tag__item__active {
  border-radius: 20px;
  color: #f0f0f0;
  opacity: 1;
  background: #555555;
}

.filter__right__tags i {
  margin: 0 5px;
  color: #0079d3;
}

@media screen and (max-width: 650px) {
  .tag__items {
    flex: 1;
    justify-content: space-between;
  }

  .filter__right__tags {
    display: none;
  }
}
</style>
