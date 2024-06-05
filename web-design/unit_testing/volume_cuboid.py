def cuboid_volume(l):
    return (l*l*l)

length = [2,1.1, -2.5, 2j, 'two']

for i in range(len(length)):
    print ("The volume of cuboid:",cuboid_volume(length[i]))

# The volume of cuboid: 8
# The volume of cuboid: 1.3310000000000004
# The volume of cuboid: -15.625
# The volume of cuboid: (-0-8j)

