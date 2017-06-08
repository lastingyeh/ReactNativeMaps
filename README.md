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

  ![alt tag](https://github.com/lastingyeh/ReactNativeMaps/blob/master/imgs/AnimatedViews.jpeg)

### refs by 

  1. https://github.com/airbnb/react-native-maps/tree/master/example
            
  2. https://github.com/mshameer/react-native-maps-sample
         