<template>
  <div>
    <div style="width: 50%; float: left;">
        <nested-list :nesteddata="nestedObj.child_elements" :displayList="'show'" @box-checked="valuePassed" :selecteditems="selecteditems"></nested-list>
    </div>
    <div style="width: 50%; float: left;">
        <display-data></display-data>
    </div>
  </div>
</template>
<script>
import NestedList from './NestedList'
import DisplayData from './DisplayData'
export default {
	name: 'HierarchyFilter',
	data() {
		return {
			'selecteditems': [],
			'nestedObj': {
				'name': 'Continent',
				'status': 'active',
				'child_elements': [{
						'name': 'Asia',
						'status': 'active',
						'child_elements': [{
							'name': 'Asia Pacific',
							'status': 'active',
							'child_elements': []
						}, {
							'name': 'China',
							'status': 'active',
							'child_elements': []
						}, {
							'name': 'Japan',
							'status': 'active',
							'child_elements': []
						}, {
							'name': 'Middle East',
							'status': 'active',
							'child_elements': []
						}]

					},
					{
						'name': 'Africa',
						'status': 'active',
						'child_elements': [{
							'name': 'South Africa',
							'status': 'active',
							'child_elements': []
						}, {
							'name': 'Nigeria',
							'status': 'active',
							'child_elements': []
						}, {
							'name': 'Morocco',
							'status': 'active',
							'child_elements': []
						}]
					},
					{
						'name': 'America',
						'status': 'active',
						'child_elements': [{
							'name': 'North America',
							'status': 'active',
							'child_elements': []
						}, {
							'name': 'South & Cen. America',
							'status': 'active',
							'child_elements': []
						}, {
							'name': 'United States',
							'status': 'active',
							'child_elements': [{
								'name': 'Texas',
								'status': 'active',
								'child_elements': []
							}, {
								'name': 'California',
								'status': 'active',
								'child_elements': []
							}, {
								'name': 'Arizona',
								'status': 'active',
								'child_elements': []
							}]
						}]
					},
					{
						'name': 'Europe',
						'status': 'active',
						'child_elements': [{
							'name': 'German',
							'status': 'active',
							'child_elements': []
						}, {
							'name': 'Italy',
							'status': 'active',
							'child_elements': []
						}, {
							'name': 'France',
							'status': 'active',
							'child_elements': []
						}]
					},
				]
			}
		}
	},
	methods: {
		valuePassed: function(value) {
            this.selecteditems.push(value)
		}
	},
	components: {
		NestedList,
		DisplayData
	}
}

</script>
