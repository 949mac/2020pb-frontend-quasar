<template>
  <q-page class="flex flex-center">

    <div style="background-color: #000;height: 110vh;width:100%">
hello
    </div>

    <div class="q-pa-lg">
      <q-timeline :layout="layout" :side="side" color="secondary">
        <q-timeline-entry heading>Timeline heading</q-timeline-entry>

        <q-timeline-entry
          title="Police respond to broken windows with excessive force"
          subtitle="May 31st"
          side="left"
        >
          <div style="max-width:600px;">
            <q-media-player style="height:400px"
              type="video"
              :sources="[ {
          src: 'https://video.twimg.com/ext_tw_video/1269533011067850758/pu/vid/720x1280/ra4JWJTNRmEp2neY.mp4?tag=10',
          type: 'video/mp4' }]"
              background-color="blue-grey-2"
              dark
            />
            <blockquote>Footage shows a few individuals break off from a protest to smash City Hall windows. Protestors shout at vandals to stop. Police then arrive. They arrest multiple individuals near the City Hall windows, including one individual who appeared to approach the vandals in an effort to defuse the situation. Police fire tear gas and riot rounds at protestors during the arrests. Protestors become agitated. After police walk arrestee away, protestors continue to shout at police. Police respond with a second bout of tear gas and riot rounds. A racial slur can be heard shouted, although it is unsure who is shouting.</blockquote>
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Police respond to broken windows with excessive force"
          subtitle="May 31st"
          side="right"
          icon="delete"
        >
          <div style="max-width:600px">
            <q-media-player style="height:400px"
              type="video"
              :sources="[ {
          src: 'https://video.twimg.com/ext_tw_video/1269326361862107136/pu/vid/1280x720/G9XoBgI2owQckJrR.mp4?tag=10',
          type: 'video/mp4' }]"
              background-color="blue-grey-2"
              dark
            />
            <blockquote>Footage shows a few individuals break off from a protest to smash City Hall windows. Protestors shout at vandals to stop. Police then arrive. They arrest multiple individuals near the City Hall windows, including one individual who appeared to approach the vandals in an effort to defuse the situation. Police fire tear gas and riot rounds at protestors during the arrests. Protestors become agitated. After police walk arrestee away, protestors continue to shout at police. Police respond with a second bout of tear gas and riot rounds. A racial slur can be heard shouted, although it is unsure who is shouting.</blockquote>
          </div>

        </q-timeline-entry>

        <q-timeline-entry heading>November, 2017</q-timeline-entry>

        <q-timeline-entry
          title="Event Title"
          subtitle="February 22, 1986"
          side="left"
          avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        >
          <video-embed src="https://vimeo.com/370293725"></video-embed>
        </q-timeline-entry>

        <q-timeline-entry
          title="Event Title"
          subtitle="February 22, 1986"
          side="right"
        >
          <video-embed src="https://www.youtube.com/watch?v=s4ObxcdXoFE"></video-embed>
        </q-timeline-entry>

        <q-timeline-entry
          title="Event Title"
          subtitle="February 22, 1986"
          side="left"
          color="orange"
          icon="done_all"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Event Title"
          subtitle="February 22, 1986"
          side="right"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Event Title"
          subtitle="February 22, 1986"
          side="left"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageTimeline',
  data () {
    return {
      layout: 'loose',
      side: 'right'
    }
  }
}
</script>
