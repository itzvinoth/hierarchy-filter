<template>
  <div>
    <ul v-show="show" class="ul-list">
    	<li v-for="data in nesteddata" @click="handleClick(data, $event)" :key="data.name">
        {{ (data.child_elements && data.child_elements.length && data.status == 'active') ? expand : collapse }}
        <input type="checkbox" :value="data.name">
        {{ data.name }}
				<nested-list :key="data.name"
    			v-if="data.child_elements"
    			:nesteddata="data.child_elements"
    			:displaylist="displayList">
			</nested-list>
			</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NestedList',
  props: {
  	nesteddata: Array,
  	displayList: String
  },
  data () {
  	return {
			show: true,
			expand: '+',
			collapse: '-'
  	}
  },
  methods: {
  	handleClick: function (val, event) {
			val.status = (val.status == 'active') ? 'deactive' : 'active'
  		event.stopPropagation()
      // console.log(val.status)
  		let ul = event.target.querySelector("ul")
  		if (ul.style.display == 'none') {
  			ul.style.display = 'block'
  		} else {
  			ul.style.display = 'none'
			}
			return false
  	}
  },
  created: function () {
  	if(this.displayList == 'show') {
  		this.show = true
  	} else {
  		this.show = false
  	}
  }
}
</script>

<style>
.ul-list {
	list-style: none;
}
</style>
