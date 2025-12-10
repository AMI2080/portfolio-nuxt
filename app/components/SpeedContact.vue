<script setup lang="ts">
import {
  ContactIcon,
  WhatsAppIcon,
  EmailIcon,
  CallIcon,
  CopyIcon,
  LinkedinTextIcon,
} from "@/components/icons";
import { emailAddress, linkedinUrl, phoneNumber } from "@/constants/contact";
import { name } from "@/constants/base-info";

const mailtoLink = `mailto:${emailAddress}`;

const telLink = `tel:${phoneNumber}`;

const whatsInput = ref<HTMLInputElement | null>();
const focusWhatsInput = (): void => {
  setTimeout(() => {
    whatsInput.value?.focus();
  }, 200);
};

const whatsappMessage = ref<string>("Hi,");

const whatsappLink = computed(() => {
  return `https://wa.me/${phoneNumber}?text=${whatsappMessage.value}`;
});

const copyToClipboard = (string: string): void => {
  navigator.clipboard.writeText(string);
};
</script>

<template>
  <div class="fixed bottom-4 end-4">
    <v-speed-dial transition="fade-transition" :close-on-content-click="false">
      <template #activator="{ props: activatorProps }">
        <v-btn
          v-bind="activatorProps"
          rounded="circle"
          color="var(--color-gold-600)"
          class="min-w-fit h-fit p-3"
        >
          <contact-icon class="w-12 h-12 text-gold-950" />
        </v-btn>
      </template>
      <template #default="{ isActive }">
        <v-menu
          location="start bottom"
          offset="8"
          :close-on-content-click="false"
        >
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              rounded="circle"
              color="transparent"
              class="min-w-fit h-fit p-0 mb-4"
              variant="text"
              @click="focusWhatsInput()"
            >
              <whats-app-icon class="w-10 h-10" />
            </v-btn>
          </template>
          <div
            class="max-w-md mx-auto bg-[#efe7dd] h-100 flex flex-col shadow-xl rounded-lg overflow-hidden"
          >
            <a
              :href="whatsappLink"
              target="_blank"
              class="bg-[#008069] p-3 flex items-center gap-3 text-white z-10 shadow-md"
            >
              <img
                src="assets/image/avatar.jpg"
                class="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 class="font-semibold text-sm">{{ name }}</h3>
                <p class="text-xs opacity-80">Online</p>
              </div>
            </a>

            <img
              src="assets/image/whats-texture.jpg"
              class="opacity-70 overflow-hidden"
              alt="texture"
            />

            <div class="bg-[#f0f2f5] p-2 flex items-center gap-2 z-10">
              <input
                ref="whatsInput"
                autofocus
                autocomplete="off"
                type="text"
                v-model="whatsappMessage"
                placeholder="Type a message"
                class="flex-1 p-2 rounded-lg text-sm border-none focus:ring-0 focus:outline-none shadow-sm"
              />
              <v-btn
                :href="whatsappLink"
                target="_blank"
                rounded="circle"
                color="#008069"
                theme="light"
                class="p-2 min-w-auto w-9 h-9"
                @click="isActive.value = false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"
                  />
                </svg>
              </v-btn>
            </div>
          </div>
        </v-menu>

        <v-menu
          location="start bottom"
          offset="8"
          :close-on-content-click="false"
        >
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              rounded="circle"
              color="var(--color-gold-500)"
              class="min-w-fit h-fit p-3 mb-2"
            >
              <email-icon class="w-6 h-6 text-gold-950" />
            </v-btn>
          </template>
          <div class="rounded-lg p-4 bg-gold-300 w-74">
            <v-text-field v-model="emailAddress" variant="outlined" readonly>
              <template #append-inner>
                <v-btn
                  color="var(--color-gold-700)"
                  theme="dark"
                  rounded="lg"
                  class="px-2 min-w-auto"
                  @click="copyToClipboard(emailAddress)"
                >
                  <copy-icon />
                </v-btn>
              </template>
            </v-text-field>
            <v-btn
              :href="mailtoLink"
              color="var(--color-gold-700)"
              text="Contact"
              theme="dark"
              class="block p-2.5"
              @click="isActive.value = false"
            />
          </div>
        </v-menu>

        <v-menu
          location="start bottom"
          offset="8"
          :close-on-content-click="false"
        >
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              rounded="circle"
              color="var(--color-gold-500)"
              class="min-w-fit h-fit p-3 mb-2"
            >
              <call-icon class="w-6 h-6 text-gold-950" />
            </v-btn>
          </template>
          <div class="rounded-lg p-4 bg-gold-300 w-74">
            <v-text-field variant="outlined" v-model="phoneNumber" readonly>
              <template #append-inner>
                <v-btn
                  color="var(--color-gold-700)"
                  theme="dark"
                  rounded="lg"
                  class="px-2 min-w-auto"
                  @click="copyToClipboard(phoneNumber)"
                >
                  <copy-icon />
                </v-btn>
              </template>
            </v-text-field>
            <v-btn
              :href="telLink"
              color="var(--color-gold-700)"
              text="Start call"
              theme="dark"
              class="block p-2.5"
              @click="isActive.value = false"
            />
          </div>
        </v-menu>

        <v-btn
          :href="linkedinUrl"
          target="_blank"
          rounded="circle"
          color="var(--color-gold-500)"
          class="min-w-fit h-fit p-3 mb-2"
        >
          <linkedin-text-icon class="w-6 h-6 text-gold-950" />
        </v-btn>
      </template>
    </v-speed-dial>
  </div>
</template>
