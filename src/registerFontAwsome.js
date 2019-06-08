/* eslint-disable no-console */

import Vue from 'vue'

import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTable as fasTable,
  faBookmark as fasBookmark,
  faChartLine as fasChartLine,
  faEllipsisV as fasEllipsisV,
  faPaperPlane as fasPaperPlane,
  faTachometerAlt as fasTachometerAlt,
  faDigitalTachograph as fasDigitalTachograph
} from '@fortawesome/free-solid-svg-icons'

library.add(fasTable, fasBookmark, fasChartLine, fasEllipsisV, fasPaperPlane, fasTachometerAlt, fasDigitalTachograph)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
