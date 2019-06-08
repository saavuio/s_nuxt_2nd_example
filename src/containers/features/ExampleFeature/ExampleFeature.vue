<template>
  <div>
    loading: {{ loading }}
    <ExampleItem />
    <no-ssr>
      <ChattyFlowEditor :event-bus="eventBus" :input-structures="inputStructures" :input-data="inputData" />
    </no-ssr>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// components
import ExampleItem from '@/components/features/ExampleFeature/ExampleItem.vue';
// store
import { getModule } from 'vuex-module-decorators';
import ExampleFeatureStore from '@/store/feature/example-feature.ts';
import DataFetcherStore from '@/store/helper/data-fetcher.ts';

const ChattyFlowEditor = process.browser ? require('chatty-flow-editor') : undefined;

@Component({
  components: {
    ExampleItem,
    ChattyFlowEditor,
  },
})
export default class ChannelList extends Vue {
  dataFetcherStore!: DataFetcherStore;

  exampleFeatureStore!: ExampleFeatureStore;

  eventBus = new Vue();

  inputStructures = {
    flows: [
      {
        id: 1,
        createdAt: '2019-01-02T04:57:31+00:00',
        status: 'draft',
        blocks: [
          {
            id: 1,
            blockIndex: 1,
            texts: [
              {
                id: 1,
                content: {
                  default:
                    'Hello you! This is the first message of the first-chat flow. Click anywhere to start editing.',
                },
                botName: { default: 'Jen' },
                botAvatar: { default: './jen.png' },
              },
            ],
          },
        ],
      },
    ],
  };

  inputData = {
    teamData: {
      currency: 'eur',
      creditCents: 2500,
      costPerCreditInCurrencyCents: 50,
      firstFlowPricePerPersonInCreditCents: 50,
      followUpFlowPricePerPersonInCreditCents: 100,
    },
    adminData: {
      flags: [],
    },
    channelData: {
      peopleCountInChannel: 1,
      peopleCountPerFlowStructure: [{ id: 1, flowIndex: 1, total: 5 }],
    },
  };

  get loading(): boolean {
    return this.exampleFeatureStore.getLoading;
  }

  beforeCreate() {
    console.log('beforeCreate ChannelList');
    // init stores
    this.exampleFeatureStore = getModule(ExampleFeatureStore, this.$store);
    this.dataFetcherStore = getModule(DataFetcherStore, this.$store);
    // add data needs
    this.dataFetcherStore.addDataNeeds({
      qs: ['allChannels.nodes'],
    });
  }

  created() {
    this.exampleFeatureStore.getCustomData();
  }
}
</script>
