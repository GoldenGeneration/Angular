import { Component, Input } from '@angular/core';

@Component ({
    selector: 'app-thumbnail',
    template: `
    <h2>Upcomming angular Events</h2>
    <hr>
        <div class="well hoverwell thumbnail">
        <h2>id: {{event2.id}}</h2>
        <h2>Name: {{event2.name}}</h2>
        <h2>address: {{event2.address}}</h2>
        <h2>price: \${{event2.price}}</h2>
        <h2>phone: {{event2.phone}}</h2>
    </div>
    `
})

export class EventThumbnailComponent{
    @Input() event2: any;
}