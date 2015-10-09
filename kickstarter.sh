#!/bin/bash
# Kickstart the littlehelper cluster
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo "Cloning replicaset startup script"
cp $DIR/rs1@.service $DIR/rs2@.service

echo "Starting MongoDB nodes for replicaset 1 and 2..."
fleetctl start $DIR/rs1@{1..5}.service
fleetctl start $DIR/rs2@{1..5}.service

echo "Sleep 30: Waiting for nodes to finish startup..."
sleep 30

echo "Configuring replicaset 1 and 2..."
fleetctl start $DIR/mongoreplicacfg@rs1.service
fleetctl start $DIR/mongoreplicacfg@rs2.service

echo "Starting configservers 1, 2 and 3..."
fleetctl start $DIR/mongocfgsvr@{1..3}.service

echo "Sleep 30: Waiting for configservers to finish startup..."
sleep 30

echo "Starting mongos 1, 2 and 3..."
fleetctl start $DIR/mongos@{1..3}.service

echo "Sleep 15: Waiting for mongos to finish startup..."
sleep 15

echo "Registering shard 1 and 2 with DB cluster..."
fleetctl start $DIR/mongoaddshard@rs1.service
fleetctl start $DIR/mongoaddshard@rs2.service

echo "Sleep 10: Waiting for shardregistering to finish ..."
sleep 10

echo "Insert basic JADGe data and setting shardkey for balancing..."
fleetctl start $DIR/initJadgeDB.service

echo "Starting littlehelper backends 1, 2 and 3..."
fleetctl start $DIR/littlehelper@6666.service
fleetctl start $DIR/littlehelper@7777.service
fleetctl start $DIR/littlehelper@8888.service
fleetctl start $DIR/littlehelper-discovery@6666.service
fleetctl start $DIR/littlehelper-discovery@7777.service
fleetctl start $DIR/littlehelper-discovery@8888.service
