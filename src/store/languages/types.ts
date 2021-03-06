import { ReqMessage } from '../notifications/types'

interface Language {
  Lang: string
  Logo: string
  Name: string
  Short: string
}

interface GetLanguagesResponse {
  Infos: ReadonlyArray<Language>
}

interface GetLanguagesRequest {
  Message: ReqMessage
}

export {
  Language,
  GetLanguagesRequest,
  GetLanguagesResponse
}
