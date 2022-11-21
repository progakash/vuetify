<template>
    <v-app>
        <v-card class="mx-auto" max-width="344">
            <v-card-text>
                <div>Word of the Day</div>
                    <p class="text-h4 text--primary"> be•nev•o•lent </p>
                    <p>adjective</p>
                <div class="text--primary">  well meaning and kindly.<br> "a benevolent smile" </div>
            </v-card-text>
            <v-card-actions>
                <v-btn text color="deep-purple accent-4">Learn More</v-btn>
            </v-card-actions>
        </v-card>
        <v-row align="center" justify="space-around">
            <v-btn depressed> Normal </v-btn>
            <v-btn depressed color="primary">Primary </v-btn>
            <v-btn depressed color="error">Error </v-btn>
            <v-btn depressed disabled> Disabled </v-btn>
        </v-row>
    </v-app>
</template>