<template>
  <div>
    <h3>{{ tableTitle }}</h3>
    <table class="table table-striped table-bordered">
      <thead>
        <th>
          {{ rollColumnHeader }}
        </th>
        <th>
          {{ descriptionColumnHeader }}
        </th>
        <th>
          {{ effectColumnHeader }}
        </th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in resourceItems" :key="index">
          <td>
            {{ item.roll }}
          </td>
          <td>
            <span v-html="item.description" />
          </td>
          <td>
            <span v-html="item.effect" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'FumbleTable',
  props: {
    resource: {
      type: Object,
      required: true
    }
  },
  computed: {
    resourceObj() {
      return this.resource
    },
    tableTitle() {
      return this.resourceObj.title
    },
    rollColumnHeader() {
      return this.resourceObj.rollHeader
    },
    descriptionColumnHeader() {
      return this.resourceObj.descriptionHeader
    },
    effectColumnHeader() {
      return this.resourceObj.effectHeader
    },
    resourceItems() {
      return this.resourceObj.items
    }
  }
}
</script>
