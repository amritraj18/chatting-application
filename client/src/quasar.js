import Vue from 'vue'

import './styles/quasar.styl'
import 'quasar/dist/quasar.ie.polyfills'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/material-icons/material-icons.css'
import {
  Quasar, 
  QLayout,
  QHeader,
  QAvatar,
  QFooter,
  QRouteTab,
  QTabs,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QInput,
  QChatMessage,
  QSpinnerDots,
  QDialog,
  QSpace,
  QCardSection,
  QCard,
  QForm,
  QChip
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QAvatar,
    QFooter,
    QRouteTab,
    QTabs,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QInput,
    QSpinnerDots,
    QChatMessage,
    QDialog,
    QSpace,
    QCardSection,
    QCard,
    QForm,
    QChip
  },
  directives: {
  },
  plugins: {
  }
 })