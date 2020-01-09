<template>
  <div class="container">
    <div
      v-for="prop in propTable"
      :key="prop.label"
      class="row"
    >
      <div class="col-2">
        {{ prop.label }}
      </div>
      <div class="col">
        <component
          :is="getEditorComponent(prop)"
          :value="prop.value"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Comment from '~/classes/comment';
import LabelEditor from '~/components/Editors/LabelEditor';
import TextAreaEditor from '~/components/Editors/TextAreaEditor';
import ImageEditor from '~/components/Editors/ImageEditor';

const components = {
  LabelEditor,
  TextAreaEditor,
  ImageEditor,
};

export default {
  name: "CommentCard",
  components,
  props: {
    comment : {
      type: Comment,
      required: true,
    },
  },
  computed: {
    propTable() {
      return this.comment.getPropTable();
    },
  },
  methods: {
    getEditorComponent(prop) {
      return Object.values(components).find(c => c.name === prop.editor);
    },
  }
};
</script>

<style module>
.blockHeader {
  font-weight: bold;
}
</style>
