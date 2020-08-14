<template>
  <div class="container">
    <div class="text-center">
      <h1 class="mt-2">Bikeshare Project</h1>
    </div>
    <div class="row">
      <div class="col-sm-3">
        <form @submit.prevent="fetchAPI">
          <div class="form-group">
            <label for="city">Choose a city</label>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="city" id="city1" value="chicago" v-model="city" required>
              <label class="form-check-label" for="city1">
                Chicago
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="city" id="city2" value="washington" v-model="city">
              <label class="form-check-label" for="city2">
                Washington
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="city" id="city3" value="newyork" v-model="city">
              <label class="form-check-label" for="city3">
                New York City
              </label>
            </div>
          </div>
          <div class="form-group">
            <label for="months">Choose month(s)</label>
            <div class="form-check">
              <input class="form-check-input" name="months" type="checkbox" id="January" value="1"
                v-model="months">
              <label class="form-check-label" for="January">January</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" name="months" type="checkbox" id="February" value="2"
                v-model="months">
              <label class="form-check-label" for="February">February</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" name="months" type="checkbox" id="March" value="3" v-model="months">
              <label class="form-check-label" for="March">March</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" name="months" type="checkbox" id="April" value="4" v-model="months">
              <label class="form-check-label" for="April">April</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" name="months" type="checkbox" id="May" value="5" v-model="months">
              <label class="form-check-label" for="May">May</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" name="months" type="checkbox" id="June" value="6" v-model="months">
              <label class="form-check-label" for="June">June</label>
            </div>
          </div>
          <div class="form-group">
            <label for="days">Choose day(s)</label>
            <div class="form-check">
              <input class="form-check-input" name="days" type="checkbox" id="Monday" value="0" v-model="days">
              <label class="form-check-label" for="Monday">Monday</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" name="days" type="checkbox" id="Tuesday" value="1" v-model="days">
              <label class="form-check-label" for="Tuesday">Tuesday</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" name="days" type="checkbox" id="Wednesday" value="2"
                v-model="days">
              <label class="form-check-label" for="Wednesday">Wednesday</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" name="days" type="checkbox" id="Thursday" value="3" v-model="days">
              <label class="form-check-label" for="Thursday">Thursday</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" name="days" type="checkbox" id="Friday" value="4" v-model="days">
              <label class="form-check-label" for="Friday">Friday</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" name="days" type="checkbox" id="Saturday" value="5" v-model="days">
              <label class="form-check-label" for="Saturday">Saturday</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" name="days" type="checkbox" id="Sunday" value="6" v-model="days">
              <label class="form-check-label" for="Sunday">Sunday</label>
            </div>
          </div>
          <button class="btn btn-primary" type="submit">Submit</button>
          <button class="btn btn-danger mx-2" @click="resetForm">Reset</button>
        </form>
      </div>
      <div class="col-sm-9">
        <h2>Stats</h2>
        <div v-if="isResult">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <a class="nav-link active" id="time-tab" data-toggle="tab" href="#time" role="tab" aria-controls="time"
                aria-selected="true">Time</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="station-tab" data-toggle="tab" href="#station" role="tab" aria-controls="station"
                aria-selected="false">Station</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="duration-tab" data-toggle="tab" href="#duration" role="tab"
                aria-controls="duration" aria-selected="false">Duration</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="user-tab" data-toggle="tab" href="#user" role="tab" aria-controls="user"
                aria-selected="false">Users</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="user-data-tab" data-toggle="tab" href="#user-data" role="tab" aria-controls="user-data"
                aria-selected="false">Users Data</a>
            </li>
          </ul>
          <div class="tab-content py-5" id="myTabContent">
            <div class="tab-pane fade show active" id="time" role="tabpanel" aria-labelledby="time-tab">
              <div class="card mb-3 widget-content">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left">
                    <div class="widget-heading">Month</div>
                    <div class="widget-subheading">The most common month</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers text-success"><span>{{result[0].month}}</span></div>
                  </div>
                </div>
              </div>
              <div class="card mb-3 widget-content">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left">
                    <div class="widget-heading">Day</div>
                    <div class="widget-subheading">The most common day of the week</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers text-primary"><span>{{result[0].day}}</span></div>
                  </div>
                </div>
              </div>
              <div class="card mb-3 widget-content">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left">
                    <div class="widget-heading">Hour</div>
                    <div class="widget-subheading">The most common start hour</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers text-danger"><span>{{result[0].hour}}</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="station" role="tabpanel" aria-labelledby="station-tab">
              <div class="card mb-3 widget-content">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left">
                    <div class="widget-heading">Start Station</div>
                    <div class="widget-subheading">The most common start station</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers text-success"><span>{{result[1].start}}</span></div>
                  </div>
                </div>
              </div>
              <div class="card mb-3 widget-content">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left">
                    <div class="widget-heading">End Station</div>
                    <div class="widget-subheading">The most common end station</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers text-primary"><span>{{result[1].end}}</span></div>
                  </div>
                </div>
              </div>
              <div class="card mb-3 widget-content">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left">
                    <div class="widget-heading">Trip</div>
                    <div class="widget-subheading">The most common trip</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers text-danger"><span>{{result[1].trip}}</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="duration" role="tabpanel" aria-labelledby="duration-tab">
              <div class="card mb-3 widget-content">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left">
                    <div class="widget-heading">Total</div>
                    <div class="widget-subheading">The total travel time</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers text-success"><span>{{result[2].total}}</span></div>
                  </div>
                </div>
              </div>
              <div class="card mb-3 widget-content">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left">
                    <div class="widget-heading">Mean</div>
                    <div class="widget-subheading">The mean travel time</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers text-primary"><span>{{result[2].mean}}</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="user" role="tabpanel" aria-labelledby="user-tab">
              <h3>Counts of user types</h3>
              <div class="row">
                <div class="col-lg-6">
                  <div class="card mb-3 widget-content">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left">
                        <div class="widget-heading">Subscribers</div>
                        <div class="widget-subheading">Total number of subscribers</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="widget-numbers text-success"><span>{{result[3].subscriber}}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card mb-3 widget-content">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left">
                        <div class="widget-heading">Customers</div>
                        <div class="widget-subheading">Total number of customers</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="widget-numbers text-success"><span>{{result[3].customer}}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3>Counts of both genders</h3>
              <div class="row">
                <div class="col-lg-6">
                  <div class="card mb-3 widget-content">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left">
                        <div class="widget-heading">Males</div>
                        <div class="widget-subheading">Total number of males</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="widget-numbers text-primary"><span>{{result[3].male}}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card mb-3 widget-content">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left">
                        <div class="widget-heading">Females</div>
                        <div class="widget-subheading">Total number of females</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="widget-numbers text-primary"><span>{{result[3].female}}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3>Year of birth</h3>
              <div class="card mb-3 widget-content">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left">
                    <div class="widget-heading">Earliest</div>
                    <div class="widget-subheading">The earliest year of birth</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers text-danger"><span>{{result[3].min}}</span></div>
                  </div>
                </div>
              </div>
              <div class="card mb-3 widget-content">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left">
                    <div class="widget-heading">Most Recent</div>
                    <div class="widget-subheading">The most recent year of birth</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers text-danger"><span>{{result[3].max}}</span></div>
                  </div>
                </div>
              </div>
              <div class="card mb-3 widget-content">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left">
                    <div class="widget-heading">Most Common</div>
                    <div class="widget-subheading">The most common year of birth</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers text-danger"><span>{{result[3].mode}}</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="user-data" role="tabpanel" aria-labelledby="user-data-tab">
              rows of data
            </div>
          </div>
        </div>
        <div v-else>Define your criteria to show results</div>

      </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    name: "Home",
    data: function () {
      return {
        city: '',
        months: [],
        days: [],
        result: []
      }
    },
    methods: {
      async fetchAPI() {
        let response = await axios.get('https://bikeshare-ihab-api.herokuapp.com/api/' + this.city, {
          params: {
            months: JSON.stringify(this.months),
            days: JSON.stringify(this.days)
          }
        })
        this.result = response.data
        console.log(response.data)
      },
      resetForm(){
        this.city = ''
        this.months = []
        this.days = []
        this.result = []
      }
    },
    computed: {
      isResult(){
        if(this.result.length > 0){
          return true
        }else{
          return false
        }
      }
    }
  };
</script>