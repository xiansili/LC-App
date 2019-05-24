<template>
  <div class="me">
    <Card title="个人中心" icon="ios-options" class="card" :padding="0" shadow >
      <CellGroup>
        <Cell title="用户名" extra="details"/>
        <Cell title="点我登录" to="/login" selected/> 
        <Cell title="设置" />
        <Cell title="1.1.0" disabled/>
        <Cell title="联系我" />
      </CellGroup>
      <Collapse >
        <Panel name="1">
            QQ
            <p slot="content">865915497</p>
        </Panel>
        <Panel name="2">
            电话
            <p slot="content">18804626062</p>
        </Panel>
        <Panel name="3">
            github
            <p slot="content"></p>
        </Panel>
    </Collapse>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchValue: true
    };
  }
};
</script>

<style lang="scss" scoped>
.me{
  padding: 0.2rem;
  background: #f8f8f9;
}
.card{
  width: 100%;
}
</style>