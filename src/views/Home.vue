<template>
  <div class="container-fluid">
    <div class="text-center">
      <h1 class="mt-3">Bikeshare Project</h1>
    </div>
    <div class="row">
      <div class="col-sm-2 mb-3">
        <form @submit.prevent="fetchAPI">
          <div class="form-group">
            <label for="city" class="font-weight-bold">Choose a city</label>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="city" id="city1" value="chicago" v-model="city"
                required>
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
            <label for="months" class="font-weight-bold">Choose month(s)</label>
            <div class="form-check">
              <input class="form-check-input" name="months" type="checkbox" id="January" value="1" v-model="months">
              <label class="form-check-label" for="January">January</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" name="months" type="checkbox" id="February" value="2" v-model="months">
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
            <div class="form-check">
              <input class="form-check-input" name="all_months" type="checkbox" id="all_months" @change="allMonths()"
                :checked="months.length == 6">
              <label class="form-check-label" for="all_months">All</label>
            </div>
          </div>
          <div class="form-group">
            <label for="days" class="font-weight-bold">Choose day(s)</label>
            <div class="form-check">
              <input class="form-check-input" name="days" type="checkbox" id="Monday" value="0" v-model="days">
              <label class="form-check-label" for="Monday">Monday</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" name="days" type="checkbox" id="Tuesday" value="1" v-model="days">
              <label class="form-check-label" for="Tuesday">Tuesday</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" name="days" type="checkbox" id="Wednesday" value="2" v-model="days">
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
            <div class="form-check">
              <input class="form-check-input" name="all_days" type="checkbox" id="all_days" @click="allDays()"
                :checked="days.length == 7">
              <label class="form-check-label" for="all_days">All</label>
            </div>
          </div>
          <button class="btn btn-primary" type="submit">Submit</button>
          <a class="btn btn-danger m-2" @click="resetForm">Reset</a>
        </form>
      </div>
      <div class="col-sm-10">
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
              <a class="nav-link" id="user-data-tab" data-toggle="tab" href="#user-data" role="tab"
                aria-controls="user-data" aria-selected="false">Users Data</a>
            </li>
          </ul>
          <div class="tab-content py-3" id="myTabContent">
            <div class="tab-pane fade show active" id="time" role="tabpanel" aria-labelledby="time-tab">
              <div class="card mb-3 widget-content">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left">
                    <div class="widget-heading">Month</div>
                    <div class="widget-subheading">The most common month</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers text-success"><span>{{returnMonth(result[0].month)}}</span></div>
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
                    <div class="widget-numbers text-primary"><span>{{returnDay(result[0].day)}}</span></div>
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
                    <div class="widget-numbers text-success text-right"><span>{{result[1].start}}</span></div>
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
                    <div class="widget-numbers text-primary text-right"><span>{{result[1].end}}</span></div>
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
                    <div class="widget-numbers text-danger text-right"><span>{{result[1].trip}}</span></div>
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
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                    aria-controls="pills-home" aria-selected="true">Raw</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
                    aria-controls="pills-profile" aria-selected="false">Table</a>
                </li>
              </ul>
              <div v-if="users.length" class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <pre>{{usersRaw}}</pre>
                  <div class="text-center">
                    <button class="btn btn-primary mb-5" @click="fetchUsersAPI">Load The next 5 users</button>
                  </div>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <div class="table-responsive">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Start Time</th>
                          <th scope="col">End Time</th>
                          <th scope="col">Duration</th>
                          <th scope="col">Start Station</th>
                          <th scope="col">End Station</th>
                          <th scope="col">User Type</th>
                          <th scope="col">Gender</th>
                          <th scope="col">Birth Year</th>
                        </tr>
                      </thead>
                      <tbody>
                        <template v-for="batch in users">
                          <tr v-for="(user, key) in batch" :key="key">
                            <th scope="row">{{+key+1}}</th>
                            <td>{{user['Start Time']}}</td>
                            <td>{{user['End Time']}}</td>
                            <td>{{user['Trip Duration']}}</td>
                            <td>{{user['Start Station']}}</td>
                            <td>{{user['End Station']}}</td>
                            <td>{{user['User Type']}}</td>
                            <td :class="{'text-danger' : !user['Gender']}">{{user['Gender'] ? user['Gender'] : 'N/A'}}
                            </td>
                            <td :class="{'text-danger' : !user['Birth Year']}">
                              {{user['Birth Year'] ? user['Birth Year'] : 'N/A'}}</td>
                          </tr>
                        </template>
                      </tbody>
                    </table>
                    <div class="text-center">
                      <button class="btn btn-primary mb-5" @click="fetchUsersAPI">Load The next 5 users</button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                <div class="text-center mb-3">Wait for user data to bea loaded ..</div>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar"
                    aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          {{msg}}
          <div v-if="error">
            <div class="alert alert-danger fade show mt-3" role="alert">
              {{error}}
            </div>
          </div>
        </div>
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
        result: [],
        msg: 'Define your criteria to show results.',
        error: '',
        usersStart: 0,
        usersEnd: 5,
        users: [],
        usersRaw: [],
        defaultUsersStartEnd: [0, 5],
        allDaysSelect: false,
        allMonthsSelect: false
      }
    },
    methods: {
      async fetchAPI() {
        if (!this.city || !this.months.length || !this.days.length) {
          this.error = 'You should choose a city, desired month(s) and day(s) to get results!'
        } else {
          this.$Progress.start()
          this.users = []
          this.usersStart = this.defaultUsersStartEnd[0]
          this.usersEnd = this.defaultUsersStartEnd[1]
          this.fetchUsersAPI()
          // await axios.get('https://bikeshare-ihab-api.herokuapp.com/api/' + this.city, {
            await axios.get('http://127.0.0.1:5000/api/' + this.city, {
            params: {
              months: JSON.stringify(this.months),
              days: JSON.stringify(this.days)
            }
          }).then((response => {
            this.result = response.data
            this.$Progress.finish()
          }), () => {
            this.$Progress.fail()
          })
        }
      },
      async fetchUsersAPI() {
        this.$Progress.start()
        // await axios.get('https://bikeshare-ihab-api.herokuapp.com/api/' + this.city + '/users', {
          await axios.get('http://127.0.0.1:5000/api/' + this.city + '/users', {
          params: {
            months: JSON.stringify(this.months),
            days: JSON.stringify(this.days),
            start: JSON.stringify(this.usersStart),
            end: JSON.stringify(this.usersEnd)
          }
        }).then((response => {
          this.$Progress.finish()
          this.usersRaw = response.data
          this.users.push(response.data)
          this.usersStart += 5
          this.usersEnd += 5
        }), () => {
          this.$Progress.fail()
        })
      },
      resetForm() {
        this.city = ''
        this.months = []
        this.days = []
        this.result = []
        this.users = []
        this.usersStart = this.defaultUsersStartEnd[0]
        this.usersEnd = this.defaultUsersStartEnd[1]
        this.error = ''

      },
      allDays() {
        if (this.days.length < 7) {
          this.days = ["0", "1", "2", "3", "4", "5", "6"]
        } else {
          this.days = []
        }
      },
      allMonths() {
        if (this.months.length < 6) {
          this.months = ["1", "2", "3", "4", "5", "6"]
        } else {
          this.months = []
        }
      },
      start() {
        this.$Progress.start()
      },
      set(num) {
        this.$Progress.set(num)
      },
      increase(num) {
        this.$Progress.increase(num)
      },
      decrease(num) {
        this.$Progress.decrease(num)
      },
      finish() {
        this.$Progress.finish()
      },
      fail() {
        this.$Progress.fail()
      },
      returnMonth(number) {
        if (number == 1) {
          return "January"
        } else if (number == 2) {
          return "February"
        } else if (number == 3) {
          return "March"
        } else if (number == 4) {
          return "April"
        } else if (number == 5) {
          return "May"
        } else if (number == 6) {
          return "June"
        }
      },
      returnDay(number) {
        if (number == 0) {
          return "Monday"
        } else if (number == 1) {
          return "Tuesday"
        } else if (number == 2) {
          return "Wednesday"
        } else if (number == 3) {
          return "Thursday"
        } else if (number == 4) {
          return "Friday"
        } else if (number == 5) {
          return "Saturday"
        } else if (number == 6) {
          return "Sunday"
        }
      }
    },
    computed: {
      isResult() {
        if (this.result.length > 0) {
          return true
        } else {
          return false
        }
      }
    }
  };
</script>