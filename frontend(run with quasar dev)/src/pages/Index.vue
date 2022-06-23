<template>
  <q-page class="flex flex-center">
    <div class="column">
      <div class="col">
        <h1>Aufgaben</h1>
      </div>
      <div class="col">
        <p>Aufgaben:                                               </p>
        <q-list bordered>
          <template v-for="issue in issueList">
            <issue-item
              :nr="issue.nr"
              :title="issue.title"
              :dueAvatar="issue.avatar"
              :dueUserName="issue.name"
              :key="issue.nr"
            ></issue-item>
          </template>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
import IssueItem from "components/IssueItem.vue";
// import { getIssueList } from "services/sminoApi.js";
export default {
  name: "PageIndex",
  components: {
    "issue-item": IssueItem,
  },
  data() {
    return {
      issueList: {
        type: Array,
        required: false,
        default: [
          { nr: 0, avatar: "hi", name: "Pascal" },
          { nr: 1, avatar: "hi2", name: "Matthias" },
        ],
      },
    };
  },
  beforeMount() {
    // this.issueList = await this.getIssueList();
  },
};
</script>
