import {
  BookIcon,
  Edit3Icon,
  GithubIcon,
  GridIcon,
  LockIcon,
  LogInIcon,
  MailIcon,
  SearchIcon,
  SendIcon,
  SettingsIcon,
  StarIcon,
  TwitterIcon,
  UploadCloudIcon
} from "vue-feather-icons"
import CodeIcon from "@/components/icons/CodeIcon.vue"
import GoogleDriveIcon from "@/components/icons/GoogleDriveIcon.vue"
import JsonIcon from "@/components/icons/JsonIcon.vue"
import KiwiIcon from "@/components/icons/KiwiIcon.vue"
import OpenNewIcon from "@/components/icons/OpenNewIcon.vue"
/*
 * アイコン一覧 https://vue-feather-icons.egoist.sh/
 * vuetifyをとおしたアイコンはpagesで
 * <v-icon>$hoge</v-icon> で呼び出せる
 */

export default {
  icons: {
    values: {
      mail: {
        component: MailIcon
      },
      search: {
        component: SearchIcon
      },
      lock: {
        component: LockIcon
      },
      book: {
        component: BookIcon
      },
      edit: {
        component: Edit3Icon
      },
      upload: {
        component: UploadCloudIcon
      },
      grid: {
        component: GridIcon
      },
      login: {
        component: LogInIcon
      },
      send: {
        component: SendIcon
      },
      twitter: {
        component: TwitterIcon
      },
      github: {
        component: GithubIcon
      },
      settings: {
        component: SettingsIcon
      },
      star: {
        component: StarIcon
      },
      kiwi: {
        component: KiwiIcon
      },
      code: {
        component: CodeIcon
      },
      json: {
        component: JsonIcon
      },
      opennew: {
        component: OpenNewIcon
      },
      googledrive: {
        component: GoogleDriveIcon
      }
    }
  },
  theme: {
    themes: {
      light: {
        primary: "#67e0bd",
        secondary: "#fcb69f",
        accent: "#795548",
        error: "#fcb69f",
        info: "#5DAFB0",
        success: "#E0F7FA",
        warning: "#FFC400"
      }
    },
    options: {
      customProperties: true
    }
  }
}
