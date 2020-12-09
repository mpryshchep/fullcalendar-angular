import { NgModule } from '@angular/core';
import { globalPlugins } from '@fullcalendar/core';
import { FullCalendarComponent } from './fullcalendar.component';
export class FullCalendarModule {
    static registerPlugins(plugins) {
        globalPlugins.push(...plugins);
    }
}
FullCalendarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FullCalendarComponent],
                imports: [],
                exports: [FullCalendarComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbGNhbGVuZGFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9mdWxsY2FsZW5kYXIvc3JjLyIsInNvdXJjZXMiOlsibGliL2Z1bGxjYWxlbmRhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFhLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPakUsTUFBTSxPQUFPLGtCQUFrQjtJQUU3QixNQUFNLENBQUMsZUFBZSxDQUFDLE9BQW9CO1FBQ3pDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFURixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRSxFQUFFO2dCQUNYLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZ2xvYmFsUGx1Z2lucywgUGx1Z2luRGVmIH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlJztcclxuaW1wb3J0IHsgRnVsbENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9mdWxsY2FsZW5kYXIuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbRnVsbENhbGVuZGFyQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXSxcclxuICBleHBvcnRzOiBbRnVsbENhbGVuZGFyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRnVsbENhbGVuZGFyTW9kdWxlIHtcclxuXHJcbiAgc3RhdGljIHJlZ2lzdGVyUGx1Z2lucyhwbHVnaW5zOiBQbHVnaW5EZWZbXSkge1xyXG4gICAgZ2xvYmFsUGx1Z2lucy5wdXNoKC4uLnBsdWdpbnMpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19