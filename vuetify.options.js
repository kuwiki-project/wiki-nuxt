import {
  BookIcon,
  Edit3Icon,
  FileTextIcon,
  GithubIcon,
  GridIcon,
  LockIcon,
  LogInIcon,
  MailIcon,
  SearchIcon,
  SendIcon,
  SettingsIcon,
  SmileIcon,
  StarIcon,
  TwitterIcon,
  UploadCloudIcon
} from "vue-feather-icons"
import IconCode from "@/components/icon/Code.vue"
import IconGoogleDrive from "@/components/icon/GoogleDrive.vue"
import IconJson from "@/components/icon/Json.vue"
import IconKiwi from "@/components/icon/Kiwi.vue"
import IconOpenNew from "@/components/icon/OpenNew.vue"
export default {
  icons: {
    values: {
      book: {
        component: BookIcon
      },
      edit: {
        component: Edit3Icon
      },
      filetext: {
        component: FileTextIcon
      },
      grid: {
        component: GridIcon
      },
      lock: {
        component: LockIcon
      },
      github: {
        component: GithubIcon
      },
      login: {
        component: LogInIcon
      },
      mail: {
        component: MailIcon
      },
      star: {
        component: StarIcon
      },
      search: {
        component: SearchIcon
      },
      send: {
        component: SendIcon
      },
      settings: {
        component: SettingsIcon
      },
      smile: {
        component: SmileIcon
      },
      twitter: {
        component: TwitterIcon
      },
      upload: {
        component: UploadCloudIcon
      },

      code: {
        component: IconCode
      },
      googledrive: {
        component: IconGoogleDrive
      },
      json: {
        component: IconJson
      },
      kiwi: {
        component: IconKiwi
      },
      opennew: {
        component: IconOpenNew
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
