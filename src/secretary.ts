/* eslint-disable @typescript-eslint/ban-ts-comment */
// these packages are defined inside zigbee2mqtt and so not available here
// @ts-ignore
// import data from '../util/data';

import type Zigbee from 'zigbee2mqtt/dist/zigbee';
import type MQTT from 'zigbee2mqtt/dist/mqtt';
import type State from 'zigbee2mqtt/dist/state';
import type EventBus from 'zigbee2mqtt/dist/eventBus';
import type Settings from 'zigbee2mqtt/dist/util/settings';
import type Logger from 'zigbee2mqtt/dist/util/logger';

class SecretaryExtension {
  private readonly mqttBaseTopic: string;

  constructor(
    protected zigbee: Zigbee,
    protected mqtt: MQTT,
    protected state: State,
    protected publishEntityState: unknown,
    protected eventBus: EventBus,
    protected settings: typeof Settings,
    protected logger: typeof Logger,
  ) {
    this.mqttBaseTopic = settings.get().mqtt.base_topic;
  }

  async start() {
    this.eventBus.onGroupMembersChanged(this, ({
      group, action, endpoint
    }) => {
      this.logger.info(`Group members changed: ${group} ${action} ${endpoint}`);
    });

    this.eventBus.onScenesChanged(this, ({
      entity
    }) => {
      this.logger.info(`Scenes changed: ${entity}`);
    });
  }

  async stop() {
  }
}

export = SecretaryExtension;
