import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
      el: "#app",
      data: {
          populationTotal: 0,
        //   allCountries: fetch("https://restcountries.eu/rest/v2/all")
        countries: []

      },
      mounted(){
          this.getCountry();
      },
      computed: {
        totalPopulation: function () {
            return this.countries.reduce( (total, country) => {
                return total + country.population
            }, 0)
        }
      },

      methods: {
        //   getPopulations: function() {
        //    allCountries.country.population.reduce(total, country) => total + country.population, 0,}

        getCountry: function() {
            fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then((data) => this.countries = data)
        },

 }})

})