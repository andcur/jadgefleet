#!/bin/bash
# Kickstart the littlehelper cluster
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo "Cloning replicaset startup script"
cp $DIR/rs1@.service $DIR/rs2@.service

echo "Starting MongoDB nodes for replicaset 1 and 2..."
fleetctl start $DIR/rs1@{1..5}.service
fleetctl start $DIR/rs2@{1..5}.service

echo "Sleeping 120s before configuring replicaset 1 and 2..."
sleep 120
fleetctl start $DIR/mongoreplicacfg@rs1.service
fleetctl start $DIR/mongoreplicacfg@rs2.service

echo "Starting configservers 1, 2 and 3..."
fleetctl start $DIR/mongocfgsvr@{1..3}.service

echo "Sleeping 120s before starting mongos 1, 2 and 3..."
sleep 120
fleetctl start $DIR/mongos@{1..3}.service

echo "Sleeping 60s before registering shard 1 and 2 with DB cluster..."
sleep 60
fleetctl start $DIR/mongoaddshard@rs1.service
fleetctl start $DIR/mongoaddshard@rs2.service

echo "Sleeping 30s before inserting basic JADGe data and setting shardkey for balancing..."
sleep 30
fleetctl start $DIR/initJadgeDB.service

echo "Sleeping 60s before starting littlehelper backends 1, 2 and 3..."
sleep 60
fleetctl start $DIR/littlehelper@1.service
fleetctl start $DIR/littlehelper@2.service
fleetctl start $DIR/littlehelper@3.service
fleetctl start $DIR/littlehelper-discovery@6666.service
fleetctl start $DIR/littlehelper-discovery@7777.service
fleetctl start $DIR/littlehelper-discovery@8888.service
