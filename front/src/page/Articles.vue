<template>
  <div class="left clearfix">
    <ul class="articles-list" id="list">
      <transition-group name="el-fade-in">
        <li class="item" v-for="(item, index) in articlesList" :key="index">
          <a href="#" target="_blank">
            <img
              src=""
              alt
              class="wrap-img img-blur-done"
              :data-src="item.img_url"
              data-has-lazy-src="false"
            />
            <div class="content">
              <h4 class="title">{{item.title}}</h4>
              <div class="abstract">{{item.desc}}</div>
              <div class="meta">
                <span>查看{{item.meta.views}}</span>
                <span>评论{{item.meta.comments}}</span>
                <span>赞{{item.meta.likes}}</span>
                <span>{{item.create_time}}</span>
              </div>
            </div>
          </a>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articlesList: []
    }
  }
};
</script>

<style>
</style>