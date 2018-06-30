<template>
  <div>
    <nested-list :nesteddata="nestedObj.child_elements" :displayList="'show'"></nested-list>
  </div>
</template>
<script>
import NestedList from './NestedList'
export default {
  name: 'HierarchyFilter',
  data () {
    return {
      "nestedObj": {
            "name": "Continent",
            "status": "active",
            "child_elements": [{
                    "name": "Asia",
                    "status": "active",
                    "child_elements": [{
                            "name": "Asia Pacific",
                            "status": "active",
                            "child_elements": []
                        }, {
                            "name": "China",
                            "status": "active",
                            "child_elements": []
                        }, {
                            "name": "Japan",
                            "status": "active",
                            "child_elements": []
                        }, {
                            "name": "Middle East",
                            "status": "active",
                            "child_elements": []
                        }
                    ]

                },
                {
                    "name": "Africa",
                    "status": "active",
                    "child_elements": [{
                            "name": "South Africa",
                            "status": "active",
                            "child_elements": []
                        }, {
                            "name": "Nigeria",
                            "status": "active",
                            "child_elements": []
                        }, {
                            "name": "Morocco",
                            "status": "active",
                            "child_elements": []
                        }
                    ]
                },
                {
                    "name": "America",
                    "status": "active",
                    "child_elements": [{
                            "name": "North America",
                            "status": "active",
                            "child_elements": []
                        }, {
                            "name": "South & Cen. America",
                            "status": "active",
                            "child_elements": []
                        }, {
                            "name": "United States",
                            "status": "active",
                            "child_elements": [{
                              "name": "Texas",
                              "status": "active",
                              "child_elements": []                              
                            },{
                              "name": "California",
                              "status": "active",
                              "child_elements": []                              
                            },{
                              "name": "Arizona",
                              "status": "active",
                              "child_elements": []                              
                            }]
                        }
                    ]
                },
                {
                    "name": "Europe",
                    "status": "active",
                    "child_elements": [{
                            "name": "German",
                            "status": "active",
                            "child_elements": []
                        }, {
                            "name": "Italy",
                            "status": "active",
                            "child_elements": []
                        }, {
                            "name": "France",
                            "status": "active",
                            "child_elements": []
                        }
                    ]
                },
            ]
        }
    }
  },
  components: {
    NestedList
  }
}

</script>
