<template>
  <div>
    <ul v-show="show">
    	<li v-for="data in nesteddata" @click="handleClick">
    		{{data.name}}
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
  	  show: true
  	}
  },
  methods: {
  	handleClick: function (event) {
  		event.stopPropagation()
  		let ul = event.target.querySelector("ul")
  		if (ul.style.display == 'none') {
  			ul.style.display = 'block'
  		} else {
  			ul.style.display = 'none'
  		}
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