<template>
     <Page class="page">
      <ScrollView>
        <TabView height="100%">
          <TabViewItem title="Apps">
            <ScrollView orientation="horizontal">
              <ListView class="list-group" for="app in apps" @itemTap="onItemTap" style="height:1250px">
                <v-template>
                  <FlexboxLayout flexDirection="row" class="list-group-item">
                    <Label :text="app.environment" class="list-group-item-heading" style="width: 40%" />
                    <Label :text="app.app_name" class="list-group-item-heading" style="width: 60%" />
                  </FlexboxLayout>
                </v-template>
              </ListView>
            </ScrollView>
          </TabViewItem>
          <TabViewItem title="Errors">
            <ScrollView orientation="horizontal">
            </ScrollView>
          </TabViewItem>
        </TabView>
      </ScrollView>
    </Page>
</template>
<script>
export default {
    
    data () {
      return {
        apps: [],
        errors: []
      };
    },
    methods: {
        onItemTap: function (args) {
            console.log('Item with index: ' + args.index + ' tapped');
        },
        updateApps: function() {
            this.apps = Object.assign(this.$root.$firebaseRefs.apps, [])
        },
        updateErrors: function() {
            this.errors = Object.assign(this.$root.$firebaseRefs.errors, [])
        }
    }
  };
</script>