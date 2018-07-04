<template>
  <div>
    <ul v-show="show" class="ul-list">
    	<li v-for="data in nesteddata" @click="handleClick(data, $event)" :key="data.name">
        {{ (data.child_elements && data.child_elements.length && data.status == 'active') ? expand : collapse }}
        <input type="checkbox" :value="data.name" @click="check($event)" v-model="checkedItems">
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
			collapse: '-',
			checkedItems: []
  	}
  },
  methods: {
  	handleClick: function (val, event) {
			event.stopPropagation()
			val.status = (val.status == 'active') ? 'deactive' : 'active'
			//Detect clicked element 
			if (event.target.nodeName == 'LI') {
				// console.log(val.status)
				let ul = event.target.querySelector("ul")
				if (ul.style.display == 'none') {
					ul.style.display = 'block'
				} else {
					ul.style.display = 'none'
				}
			}
		},
		check: function (event) {
			if (event.target.checked)
				console.log(event.target.value)
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
