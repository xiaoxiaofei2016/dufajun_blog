<template>
  <div class="publish-article" @click="donotShowImg">
    <div class="top" >
      <input placeholder="请输入文章标题..." type="text" class="title" v-model="title"/>
      <div class="selectImg" @click.stop="showBtn" >
        <div class="toggle-btn" ></div>
        <div class="panel" v-show="show_selectImg_btn">
          <div class="title">添加封面大图</div>
          <button class="select-btn" style="display: none;">点击此处添加图片</button>
          <div class="preview-box">
            <img src="../assets/avatar2.jpg" class="preview-image"/>
            <button class="delete-btn" @click.stop="deleteImg">
              <i class="iconfont icon-shanchu"></i>
            </button>
          </div>
        </div>
      </div>
      <span class="save" @click="save">发布</span>
      <router-link to="" class="link">
        <img :src="avatar" alt class="avatar" />
      </router-link>
    </div>
    <mavon-editor
      v-model="content"
      ref="md"
      @imgAdd="imgAdd"
      @change="change"
      style="min-height: 600px"
    ></mavon-editor>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  data () {
    return {
      avatar: require('../assets/avatar3.jpg'),
      content: "",
      title: '',
      html: '',
      configs: {},
      show_selectImg_btn: false
    };
  },
  components: {
    mavonEditor
  },
  methods: {
    imgAdd () {},
    change () {},
    showBtn () {
      this.show_selectImg_btn = true
    },
    donotShowImg () {
      if (this.show_selectImg_btn == true) {
        this.show_selectImg_btn = false
      }
    },
    deleteImg () {
      console.log('1')
    },
    save () {}
  }
};
</script>

<style scoped lang="less">
.publish-article {
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  .top {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    z-index: 2000;
    .title {
      flex: 1 1 auto;
      border: none;
      font-size: 24px;
      font-weight: 600;
      outline: none;
    }
    .save {
      color: #007fff;
      font-size: 16px;
      cursor: pointer;
      padding: 5px;
      margin-right: 30px;
    }
    .link {
      width: 30px;
      .avatar {
        width: 30px;
      }
    }
    .selectImg {
      width: 30px;
      height: 30px;
      padding: 0 10px;
      margin-right: 50px;
      position: relative;
    }
    .toggle-btn {
      width: 30px;
      height: 30px;
      position: relative;
      background-image: url('../assets/white.svg');
      background-position: 50%;
      background-repeat: no-repeat;
      cursor: pointer
    }
    .blue {
      background-image: url('../assets/blue.svg');
    }
    .panel {
      position: absolute;
      margin-top: 20px;
      padding: 20px;
      top: 84%;
      left: 50%;
      font-size: 16px;
      white-space: nowrap;
      color: #909090;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 2px;
      box-shadow: 0 1px 2px #f1f1f1;
      transform: translate(-50%);
      z-index: 3001;
      .title {
        margin-bottom: 14px;
        font-size: 17px;
        font-weight: 700;
        color: hsla(218, 9%, 51%, .8);
      }
      .select-btn {
        width: 240px;
        height: 100px;
        font-size: 15px;
        color: rgba(51, 51, 51, .4);
        background-color: hsla(0, 0%, 87%, .6);
        border: none;
        outline: none;
        cursor: pointer;
      }
      .select-btn:hover {
        background-color: hsla(0, 0%, 87%, 1);
      }
      .preview-box {
        position: relative;
        width: 240px;
        overflow: hidden;
        .preview-image {
          width: 100%;
          min-height: 36px;
        }
        .delete-btn {
          position: absolute;
          margin: 6px;
          padding: 2px 6px;
          top: 0;
          right: 0;
          font-size: 20px;
          color: #fff;
          background-color: rgba(0, 0, 0, .5);
          border: none;
          border-radius: 2px;
          outline: none;
          cursor: pointer;
          z-index: 3001;
        }
      }
    }
    .panel::before {
      content: "";
      position: absolute;
      margin-left: -6px;
      top: -7px;
      left: 50%;
      width: 12px;
      height: 12px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-right: none;
      border-bottom: none;
      transform: rotate(45deg);
    }
  }
}
</style>