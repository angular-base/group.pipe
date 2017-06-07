# group.pipe
This Angular pipeline allows the user to grouping an  **`Array<Object>`** by a key.

## Usage it in your code
    <ul>
      <li *ngFor="let customer of customers | group: 'address'">{{ customer | json }}</li>
    </ul>