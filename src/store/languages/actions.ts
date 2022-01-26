import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'
import { GetLanguagesRequest, GetLanguagesResponse } from './types'
import { LanguagesState } from './state'
import { ActionTree } from 'vuex'
import { AugmentedActionContext, RootState } from '../index'
import { LanguageMutations } from './mutations'
import { API } from './const'
import { doAction } from '../action'

interface LanguageActions {
  [ActionTypes.GetLanguages]({
    commit
  }: AugmentedActionContext<
    LanguagesState,
    RootState,
    LanguageMutations<LanguagesState>>,
    req: GetLanguagesRequest): void
}

const actions: ActionTree<LanguagesState, RootState> = {
  [ActionTypes.GetLanguages] ({ commit }, req: GetLanguagesRequest) {
    doAction<GetLanguagesRequest, GetLanguagesResponse>(
      commit,
      API.GET_LANGUAGES,
      req,
      req.Message,
      (resp: GetLanguagesResponse): void => {
        resp.Infos.forEach((lang) => {
          commit(MutationTypes.SetLanguage, lang)
        })
      })
  }
}

export {
  actions,
  LanguageActions
}
