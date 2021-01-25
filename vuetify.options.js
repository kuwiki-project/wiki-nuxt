import KiwiIcon from "@/components/KiwiIcon.vue"
import {
  BookIcon,
  Edit3Icon,
  InfoIcon,
  LockIcon,
  LogInIcon,
  MailIcon,
  SearchIcon,
  UploadCloudIcon,
} from "vue-feather-icons"
/*
 * アイコン一覧 https://vue-feather-icons.egoist.sh/
 * vuetifyをとおしたアイコンはpagesで
 * <v-icon>$hoge</v-icon> で呼び出せる
 */

export default {
  icons: {
    values: {
      mail: {
        component: MailIcon,
      },
      search: {
        component: SearchIcon,
      },
      lock: {
        component: LockIcon,
      },
      book: {
        component: BookIcon,
      },
      edit: {
        component: Edit3Icon,
      },
      upload: {
        component: UploadCloudIcon,
      },
      info: {
        component: InfoIcon,
      },
      login: {
        component: LogInIcon,
      },
      kiwi: {
        component: KiwiIcon,
      },
    },
  },
  theme: {
    themes: {
      light: {
        primary: "#80e4c7",
        secondary: "#fcb69f",
        accent: "#795548",
        error: "#fcb69f",
        info: "#5DAFB0",
        success: "#E0F7FA",
        warning: "#FFC400",
      },
    },
    options: {
      customProperties: true,
    },
  },
}
