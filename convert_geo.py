import geopandas as gpd

gdf = gpd.read_file("gadm41_PER_1.shp")
gdf.to_file("peru_regions.geojson", driver="GeoJSON")

print("Done!")