export default {
  name: 'dictionary',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getDef(){
      fetch('https://www.dictionaryapi.com/api/v3/references/collegiate/json/${this.searchTerm}')
      .then(data => data.json())
      .then( defs => {
        this.definition = defs.results;
      })
    }
  }
};


var define = new Vue({
  el: dictionaryContent,
  data:{
    title: "Dictionary App!"
  }
})
