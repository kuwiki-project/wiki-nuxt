# github actionsのワークフローについての説明

## deploy.yml
オートデプロイ用のworkflow．
pushすると自動で実行されるようになっている．
githubが用意しているサーバーからsshでさくらVPSの京大wikiサーバーにアクセスするようになっており，ssh接続用に秘密鍵はgithubのsecretsに保存．

## mannual_deploy.yml
手動デプロイ用のworkflow．
[https://github.com/kuwiki-project/wiki-nuxt/actions/workflows/mannual_deploy.yml](https://github.com/kuwiki-project/wiki-nuxt/actions/workflows/mannual_deploy.yml) に"This workflow has a workflow_dispatch event trigger."と書いてあるので，そこの右のRun Workflowのところから走らせるBranchを選択して実行．
やっていること自体はdeploy.ymlと変わらない．
