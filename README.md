### react-native-maps demo

  #### for project setup

    npm install

    #####  run ios emulator

    npm run ios 

    #### run andriod emulator

    npm run android

  #### prepare for link map

    1. import MapView from 'react-native-maps'

    2. rnpm link (needs for npm i -g rnpm) or react-native link

    3. for android use

        3.1 apply for Android key - 
        
                get API_KEY from https://developers.google.com/maps/documentation/android-api/signup

        3.2 Added API Key in android/app/src/main/AndroidManifest.xml

                <meta-data
                  android:name="com.google.android.geo.API_KEY"
                  android:value="your-api-key"/>

        3.3 android/app/src/main/java/com/thirtydaysofreactnative/MainApplication.
        
                import com.airbnb.android.react.maps.MapsPackage;

                @Override
                protected List<ReactPackage> getPackages() {
                  return Arrays.<ReactPackage>asList(
                      new MapsPackage(),
                      new MainReactPackage()
                  );
                }

  #### MainView

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/MainView.jpeg)
  
  #### DisplayLatLng

    show as simple region for location

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/DisplayLatLng.jpeg)

  #### ViewsAsMarkers

    use custom-markers at maps

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/ViewsAsMarkers.jpeg)

  #### EventListener

    1. show for mapView event-triggers

    2. Marker

    3. Polygon

    4. Polyline

    * modify path for SyntheticEvent (react-native/Libraries/Renderer/src/renderers/shared/shared/event/SyntheticEvent)

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/EventListener.jpeg)

  #### MarkerTypes

    use img to create Marker,and add 'onPress' event

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/MarkerTypes.jpeg)

  #### DraggableMarkers

    marker event-triggers

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/DraggableMarkers.jpeg)

  #### PolygonCreator

    create and draw region of Polygon

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/PolygonCreator.jpeg)

  #### PolylineCreator

    create and draw region of Polyline

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/PolylineCreator.jpeg)

  #### AnimatedViews

    MapView.Animated applied

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/AnimatedViews.gif)

  #### AnimatedMarkers

    Markers Animated

    *correct the issues : import { Animated } from 'react-native' replaced by import MapView, { AnimatedRegion } from 'react-native-maps'; 

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/AnimatedMarkers.gif)

  #### Callouts

    event triggers show info-window of mapView

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/Callouts.gif)

  #### Overlays

    show how to use  Circle,Polygon,Polyine of MapView

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/Overlays.jpeg)

  #### DefaultMarkers

    use default markers(random color used)

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/DefaultMarkers.jpeg)

  #### CustomMarkers

    use custom markers to show

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/CustomMarkers.gif)

  #### CachedMap

    use ListView match with MapView cacheEnabled

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/CachedMap.gif)

  #### LoadingMap

    As Loading effect when MapView prepare

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/LoadingMap.gif)

  #### TakeSnapshot

    Take a snap to be image resource

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/TakeSnapshot.jpeg)

  #### FitToSuppliedMarkers

    Animated to show Fit effect for markers

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/FitToSuppliedMarkers.gif)

  #### FitToCoordinates

    Fit markers selected in mapView

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/FitToCoordinates.gif)

  #### LiteMapView

    Lite Maps list

   ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/LiteMapView.jpeg)

  #### CustomTiles

    to be updating..

  #### ZIndexMarkers

    marker zIndex used

   ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/ZIndexMarkers.jpeg)

  #### StaticMap

    static map at scrollView

   ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/StaticMap.jpeg)

  #### MapStyle

    custom mapStyle used

   ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/MapStyle.jpeg)

  #### LegalLabel

    legal animated

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/LegalLabel.gif)

  #### SetNativePropsOverlays

    use ref by mapView object (circle,polygon,polyline) to set nativeProp
  
  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/SetNativePropsOverlays.gif)
  
  #### CustomOverlay

    custom overlay setting

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/CustomOverlay.jpeg)

  #### BugMarkerWontUpdate

    navigator watch && rotate marker demo

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/BugMarkerWontUpdate.gif)

### refs by 

  1. https://github.com/airbnb/react-native-maps/tree/master/example
            
  2. https://github.com/mshameer/react-native-maps-sample
         