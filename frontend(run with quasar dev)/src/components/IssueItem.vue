<template>
  <q-item :key="nr" clickable v-ripple>
    <q-item-section>{{ dueUserName }}</q-item-section>
    <q-item-section>{{ title }}</q-item-section>
    <q-item-section avatar>
      <q-avatar rounded>
        <img :src="dueUserAvatar" />
      </q-avatar>
    </q-item-section>
    <q-item-section>{{ dueDate.toLocaleDateString("en-US") }}</q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "IssueItem",
  props: {
    nr: {
      type: Number,
      required: false,
      default: 0,
    },
    title: {
      type: String,
      required: false,
      default: "Issue",
    },
    dueUserName: {
      type: String,
      default: "Matthias",
    },
    dueUserAvatar: {
      type: String,
      default: "https://cdn.quasar.dev/img/boy-avatar.png",
    },
    dueDate: {
      type: Date,
      required: false,
      default: new Date("2023-12-17T03:24:00"),
    },
  },

  computed: {
    accountNameComp: {
      get() {
        return this.accountName;
      },
      set(val) {
        this.$emit("accountName", this.accountName);
      },
    },
  },
};
</script>
