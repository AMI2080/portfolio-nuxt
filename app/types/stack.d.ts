interface StackGroup {
  title: string;
  class: string;
  items: StackItem[];
}

interface StackItem {
  name: string;
  icon: Component;
}
